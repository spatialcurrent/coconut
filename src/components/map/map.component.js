import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Point from 'ol/geom/Point';
import Icon from '@material-ui/core/Icon';
import Feature from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import Geolocation from 'ol/Geolocation';
import OLMap from 'ol/Map';
import Select from 'ol/interaction/Select';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorLayerSource from 'ol/source/Vector';
import VectorTile from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import { transformExtent } from 'ol/proj';
import { asArray } from 'ol/color';
import { defaults as defaultControls } from 'ol/control';
import { Circle, Fill, Stroke, Style } from 'ol/style';
import 'ol/ol.css';
import { parse, stringify } from 'utils/url';
import styles from './map.styles.scss';

let timer;

const FEATURE_RADIUS = 10;
const FEATURE_OPACITY = 0.8;
const LOCATION_FEATURE_RADIUS = 10;
const FEATURE_STROKE_WIDTH = 2;
const INITIAL_ZOOM = 2;
const LOCATION_ZOOM = 15;
const SELECTED_FEATURE_RADIUS = 12;
const SELECTED_FEATURE_STROKE_WIDTH = 3;
const TIMER_LENGTH = 4000;
const VISIBLE_ZOOM_LEVEL = 9;

export default class Map extends Component {
  static propTypes = {
    addNote: PropTypes.func.isRequired,
    clearFeature: PropTypes.func.isRequired,
    closeLoader: PropTypes.func.isRequired,
    extent: PropTypes.array,
    feature: PropTypes.object,
    getQuery: PropTypes.func.isRequired,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.shape({
      params: PropTypes.shape({
        query: PropTypes.string,
      }).isRequired,
    }).isRequired,
    openLoader: PropTypes.func.isRequired,
    queryExtent: PropTypes.array,
    service: PropTypes.string,
    setExtent: PropTypes.func.isRequired,
    setFeature: PropTypes.func.isRequired,
  }

  state = {
    geolocation: null,
    layer: null,
    loadCounter: 0,
    locationFeature: null,
    locationLayer: null,
    map: null,
    select: null,
    zoomToLocation: true,
  }

  componentDidMount () {
    this.initialize();
  }

  componentDidUpdate (prevProps) {
    const { feature, service } = this.props;
    const { layer, select } = this.state;

    if (service !== prevProps.service) {
      this.updateLayer();
    }

    if (layer && !feature && feature !== prevProps.feature) {
      select.getFeatures().clear();
    }

    if (!this.state.loadCounter) {
      clearTimeout(timer);
      this.props.closeLoader();
    }
  }

  componentWillUnmount () {
    this.props.clearFeature();
  }

  get currentZoomLevel () {
    return this.state.map.getView().getZoom();
  }

  get locationButton () {
    const { geolocation } = this.state;
    const tracking = geolocation && geolocation.getTracking();
    return (
      <Fab
        color={tracking ? 'primary' : 'default'}
        aria-label="locate"
        className={styles.location}
        onClick={::this.toggleGeolocation}
        size="small"
      >
        <Icon>{tracking ? 'gps_fixed' : 'gps_off'}</Icon>
      </Fab>
    );
  }

  get urlParams () {
    return parse(this.props.location.search);
  }

  addSelect () {
    const { map } = this.state;
    const { history, location, setFeature } = this.props;

    const select = this.select();
    map.addInteraction(select);
    const selectedFeatures = select.getFeatures();

    selectedFeatures.on('add', event => {
      const item = event.target.item(0);
      const feature = item.getProperties();
      if (feature) {
        setFeature(feature);
        history.push({
          pathname: location.pathname,
          search: stringify({ ...this.urlParams, featureId: item.getId() }), // eslint-disable-line
        });
      }
    });

    this.setState({ select });
  }

  basemap () {
    return new TileLayer({
      source: new XYZ({
        url: window.BASELAYER_URL, // eslint-disable-line
      }),
    });
  }

  changeMapExtent () {
    const { extent } = this.props;
    if (extent) this.state.map.getView().fit(extent);
  }

  controls () {
    return defaultControls({
      attribution: true,
      attributionOptions: {
        collapsible: false,
      },
      rotate: false,
      zoom: true,
    });
  }

  decrementLoader () {
    const loadCounter = Math.max(this.state.loadCounter - 1, 0);
    this.setState({ loadCounter });
  }

  geolocation (map) {
    const view = map.getView();
    const projection = view.getProjection();
    const geolocation = new Geolocation({ projection });

    geolocation.on('change:position', () => {
      const { locationFeature, zoomToLocation } = this.state;
      const coordinates = geolocation.getPosition();
      if (coordinates && locationFeature) {
        const point = new Point(coordinates);
        locationFeature.setGeometry(point);
        if (zoomToLocation) {
          view.setCenter(coordinates);
          view.setZoom(LOCATION_ZOOM);
          this.setState({ zoomToLocation: false });
        }
      }
    });

    geolocation.on('error', () => {
      this.props.addNote({ id: 'geolocation', message: 'There was an issue getting your location' });
    });

    return geolocation;
  }

  initialize () {
    const { getQuery, match } = this.props;
    const { query } = match.params;

    const map = this.map();
    const geolocation = this.geolocation(map);

    this.setState({ geolocation, map }, () => {
      if (query) getQuery(query);
      this.setExtentFromUrl(); // set from either url or redux extent
      setTimeout(::this.changeMapExtent);
      map.on('moveend', ::this.updateQueryParams);
    });
  }

  incrementLoader () {
    this.props.openLoader();
    this.setState({ loadCounter: this.state.loadCounter + 1 });
    timer = this.setTimer();
  }

  layer () {
    return new VectorTile({
      renderBuffer: 256,
      renderMode: 'image',
      source: this.source(),
      style: this.style(),
    });
  }

  locationLayer (feature) {
    return new VectorLayer({
      source: new VectorLayerSource({
        features: [feature],
      }),
      style: this.locationStyle(),
    });
  }

  locationStyle () {
    return new Style({
      image: new Circle({
        fill: new Fill({ color: styles.locationFeatureFill }),
        radius: LOCATION_FEATURE_RADIUS,
        stroke: new Stroke({
          color: styles.locationFeatureStroke,
          width: FEATURE_STROKE_WIDTH,
        }),
      }),
    });
  }

  map () {
    return new OLMap({
      controls: this.controls(),
      layers: [this.basemap()],
      target: 'map',
      view: this.view(),
    });
  }

  select () {
    const { layer } = this.state;
    return new Select({
      layers: [layer],
      style: this.selectStyle(),
    });
  }

  selectStyle () {
    return new Style({
      image: new Circle({
        fill: new Fill({ color: styles.selectedFeatureFill }),
        radius: SELECTED_FEATURE_RADIUS,
        stroke: new Stroke({
          color: styles.selectedFeatureStroke,
          width: SELECTED_FEATURE_STROKE_WIDTH,
        }),
      }),
    });
  }

  setExtentFromQuery () {
    const { extent, queryExtent, setExtent } = this.props;
    if (!extent && queryExtent) {
      const newExtent = transformExtent(queryExtent, 'EPSG:4326', 'EPSG:3857');
      setExtent(newExtent);
    }
  }

  setExtentFromUrl () {
    const { location, setExtent } = this.props;
    if (location.search) {
      const { extent } = this.urlParams;
      if (extent) setExtent(extent.map(Number));
    }
  }

  setTimer () {
    clearTimeout(timer);
    return setTimeout(() => {
      this.setState({ loadCounter: 0 });
    }, TIMER_LENGTH);
  }

  source () {
    const format = new GeoJSON({
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857',
    });
    const url = `${window.API_URL}/services/${this.props.service}/tiles/{z}/{x}/{y}.geojson?buffer=1`; // eslint-disable-line
    return new VectorTileSource({
      format,
      tileLoadFunction: ::this.tileLoadFunction,
      url,
    });
  }

  fill (c, opacity) {
    const s = asArray(c).slice();
    s[3] = opacity;
    return s;
  }

  style () {
    return new Style({
      image: new Circle({
        fill: new Fill({
          color: ::this.fill(styles.featureFill, FEATURE_OPACITY),
        }),
        radius: FEATURE_RADIUS,
        stroke: new Stroke({
          color: styles.featureStroke,
          width: FEATURE_STROKE_WIDTH,
        }),
      }),
    });
  }

  tileLoadFunction (tile, url) {
    tile.setLoader(() => {
      const validZoomLevel = this.currentZoomLevel >= VISIBLE_ZOOM_LEVEL;
      if (validZoomLevel) this.incrementLoader();
      this.updateQueryParams();
      const xhr = new XMLHttpRequest(); // eslint-disable-line
      xhr.open('GET', url);
      xhr.onload = () => {
        if (validZoomLevel) this.decrementLoader();
        const json = JSON.parse(xhr.responseText);
        json.features.forEach(f => {
          const [z, x, y] = tile.tileCoord;
          f.properties._tile_z = z; // eslint-disable-line
          f.properties._tile_x = x; // eslint-disable-line
          f.properties._tile_y = y; // eslint-disable-line
        });
        const format = tile.getFormat();
        const features = format.readFeatures(json);
        tile.setFeatures(features);
        tile.setProjection(format.defaultFeatureProjection);


        // if the url includes a feature id and a feature is not in
        // the redux store, set the feature in the store on tile load
        const { featureId } = this.urlParams;
        if (featureId && !this.props.feature) {
          const feature = features.find(f => f.getId() === Number(featureId));
          if (feature) {
            this.props.setFeature(feature.getProperties());
            this.state.select.getFeatures().push(feature);
          }
        }
      };
      xhr.send();
    });
  }

  toggleGeolocation () {
    if (this.state.geolocation.getTracking()) {
      this.turnOffGeolocation();
    } else {
      this.turnOnGeolocation();
    }
  }

  turnOffGeolocation () {
    const { geolocation, locationLayer, map } = this.state;
    geolocation.setTracking(false);
    if (locationLayer) map.removeLayer(locationLayer);
    this.setState({ locationLayer: null, zoomToLocation: true });
  }

  turnOnGeolocation () {
    const { geolocation, map } = this.state;
    const locationFeature = new Feature();
    const locationLayer = this.locationLayer(locationFeature);
    map.addLayer(locationLayer);
    this.setState({ locationFeature, locationLayer }, () => geolocation.setTracking(true));
  }

  updateQueryParams () {
    const { history, location, setExtent } = this.props;
    const extent = this.state.map.getView().calculateExtent();
    setExtent(extent);
    history.push({
      pathname: location.pathname,
      search: stringify({ ...this.urlParams, extent }),
    });
  }

  updateLayer () {
    const { layer, map } = this.state;
    if (layer) map.removeLayer(layer);
    const newLayer = this.layer();
    map.addLayer(newLayer);
    this.setExtentFromQuery();
    this.setState({ layer: newLayer }, ::this.addSelect);
  }

  view () {
    return new View({
      center: [0, 0],
      zoom: INITIAL_ZOOM,
    });
  }

  render () {
    return (
      <Fragment>
        <div id="map" className={styles.map} />
        { this.locationButton }
      </Fragment>
    );
  }
}
