import React, { Component } from 'react';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import { defaults as defaultControls } from 'ol/control';
import { Circle, Fill, Stroke, Style, Text } from 'ol/style';
import { fromLonLat } from 'ol/proj';
import { Point } from 'ol/geom';
import { extend, createEmpty } from 'ol/extent';
import 'ol/ol.css';
import styles from './map.styles.scss';

const INITIAL_ZOOM = 2;

export default class extends Component {
  componentDidMount () {
    this.initialize();
  }

  get basemap () {
    return new TileLayer({ source: new OSM() });
  }

  get controls () {
    return defaultControls({
      attribution: true,
      attributionOptions: {
        collapsible: false,
      },
      rotate: false,
      zoom: true,
    });
  }

  get map () {
    return new Map({
      controls: this.controls,
      layers: [this.basemap],
      target: 'map',
      view: this.view,
    });
  }

  get view () {
    return new View({
      center: [0, 0],
      zoom: INITIAL_ZOOM,
    });
  }

  initialize () {
    return this.map;
  }

  render () {
    return <div id="map" className={styles.map} />;
  }
}
