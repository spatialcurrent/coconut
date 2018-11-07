import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import Select from 'ol/interaction/Select';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import { defaults as defaultControls } from 'ol/control';
import { Circle, Fill, Stroke, Style } from 'ol/style';
import 'ol/ol.css';
import styles from './map.styles.scss';

const INITIAL_ZOOM = 2;
const FEATURE_RADIUS = 8;
const FEATURE_STROKE_WIDTH = 2;
const SELECTED_FEATURE_RADIUS = 10;
const SELECTED_FEATURE_STROKE_WIDTH = 3;

export default class extends Component {
  static propTypes = {
    feature: PropTypes.object,
    features: PropTypes.object,
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
    const { feature, features } = this.props;
    const { layer, select } = this.state;

    if (features && features !== prevProps.features) {
      this.updateLayer();
    }

    if (layer && !feature && feature !== prevProps.feature) {
      select.getFeatures().clear();
    }
  }

  addSelect () {
    const { map } = this.state;
    const { features, setFeature } = this.props;

    const select = this.select();
    map.addInteraction(select);
    const selectedFeatures = select.getFeatures();

    selectedFeatures.on('add', event => {
      const id = event.target.item(0).get('id');
      const feature = features.features.find(f => f.id === id);
      if (feature) setFeature(feature);
    });

    this.setState({ select });
  }

  basemap () {
    return new TileLayer({ source: new OSM() });
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
    return new VectorLayer({
      source: this.source(),
      style: this.style(),
    });
  }

  map () {
    return new Map({
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
          width: SELECTED_FEATURE_STROKE_WIDTH
        }),
      }),
    });
  }

  source () {
    const features = new GeoJSON({
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857',
    }).readFeatures(this.props.features);

    return new VectorSource({
      features,
    });
  }

  style () {
    return new Style({
      image: new Circle({
        fill: new Fill({ color: styles.featureFill }),
        radius: FEATURE_RADIUS,
        stroke: new Stroke({
          color: styles.featureStroke,
          width: FEATURE_STROKE_WIDTH
        }),
      }),
    });
  }

  updateLayer () {
    const { layer, map } = this.state;
    if (layer) map.removeLayer(layer);
    const newLayer = this.layer();
    map.addLayer(newLayer);
    map.getView().fit(newLayer.getSource().getExtent());
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
