import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GeoJSON from 'ol/format/GeoJSON';
import OLMap from 'ol/Map';
import Select from 'ol/interaction/Select';
import TileLayer from 'ol/layer/Tile';
import { transformExtent } from 'ol/proj';
import VectorSource from 'ol/source/VectorTile';
import VectorTile from 'ol/layer/VectorTile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import { defaults as defaultControls } from 'ol/control';
import { Circle, Fill, Stroke, Style } from 'ol/style';
import 'ol/ol.css';
import styles from './map.styles.scss';

const INITIAL_ZOOM = 2;
const FEATURE_RADIUS = 8;
const FEATURE_STROKE_WIDTH = 2;
const SELECTED_FEATURE_RADIUS = 10;
const SELECTED_FEATURE_STROKE_WIDTH = 3;

export default class Map extends Component {
  static propTypes = {
    clearFeature: PropTypes.func.isRequired,
    extent: PropTypes.array,
    feature: PropTypes.object,
    service: PropTypes.string,
    setFeature: PropTypes.func.isRequired,
  }

  state = {
    layer: null,
    map: null,
    select: null,
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
  }

  componentWillUnmount () {
    this.props.clearFeature();
  }

  addSelect () {
    const { map } = this.state;
    const { setFeature } = this.props;

    const select = this.select();
    map.addInteraction(select);
    const selectedFeatures = select.getFeatures();

    selectedFeatures.on('add', event => {
      const feature = event.target.item(0).getProperties();
      if (feature) setFeature(feature);
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

  initialize () {
    this.setState({ map: this.map() });
  }

  layer () {
    return new VectorTile({
      renderBuffer: 256,
      renderMode: 'image',
      source: this.source(),
      style: this.style(),
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

  source () {
    const format = new GeoJSON({
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857',
    });
    const url = `${window.API_URL}/services/${this.props.service}/tiles/{z}/{x}/{y}.geojson?buffer=1`; // eslint-disable-line
    return new VectorSource({
      format,
      tileLoadFunction: ::this.tileLoadFunction,
      url,
    });
  }

  style () {
    return new Style({
      image: new Circle({
        fill: new Fill({ color: styles.featureFill }),
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
      const xhr = new XMLHttpRequest(); // eslint-disable-line
      xhr.open('GET', url);
      xhr.onload = () => {
        const json = JSON.parse(xhr.responseText);
        json.features.forEach(feature => {
          const [z, x, y] = tile.tileCoord;
          feature.properties._tile_z = z; // eslint-disable-line
          feature.properties._tile_x = x; // eslint-disable-line
          feature.properties._tile_y = y; // eslint-disable-line
        });
        const format = tile.getFormat();
        tile.setFeatures(format.readFeatures(json));
        tile.setProjection(format.defaultFeatureProjection);
      };
      xhr.send();
    });
  }

  updateLayer () {
    const { layer, map } = this.state;
    if (layer) map.removeLayer(layer);
    const newLayer = this.layer();
    map.addLayer(newLayer);
    const extent = transformExtent(this.props.extent, 'EPSG:4326', 'EPSG:3857');
    if (this.props.extent) map.getView().fit(extent);
    this.setState({ layer: newLayer }, ::this.addSelect);
  }

  view () {
    return new View({
      center: [0, 0],
      zoom: INITIAL_ZOOM,
    });
  }

  render () {
    return <div id="map" className={styles.map} />;
  }
}
