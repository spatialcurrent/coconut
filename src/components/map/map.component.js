import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import { defaults as defaultControls } from 'ol/control';
import { Circle, Fill, Stroke, Style } from 'ol/style';
import 'ol/ol.css';
import styles from './map.styles.scss';

const INITIAL_ZOOM = 2;
const FEATURE_RADIUS = 8;
const FEATURE_STROKE_WIDTH = 2;

let updated = false;

export default class extends Component {
  static propTypes = {
    features: PropTypes.object,
  }

  state = {
    layer: null,
    map: null,
  }

  componentDidMount () {
    this.initialize();
  }

  componentDidUpdate () {
    if (this.props.features && !updated) {
      updated = true;
      this.updateLayer();
    }
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
        stroke: new Stroke({ color: styles.featureStroke, width: FEATURE_STROKE_WIDTH }),
      }),
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

  updateLayer () {
    const { layer, map } = this.state;
    if (layer) map.removeLayer(layer);
    const newLayer = this.layer();
    map.addLayer(newLayer);
    map.getView().fit(newLayer.getSource().getExtent());
    this.setState({ layer: newLayer });
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
