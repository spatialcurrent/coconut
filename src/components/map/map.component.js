import React, { Component } from 'react';
import Feature from 'ol/Feature';
import olMap from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import { Circle, Fill, Stroke, Style, Text } from 'ol/style';
import { fromLonLat } from 'ol/proj';
import { Point } from 'ol/geom';
import { extend, createEmpty } from 'ol/extent';
import styles from './map.styles.scss';

const ACCESS_TOKEN = 'pk.eyJ1Ijoic2RwZXl0b24iLCJhIjoiY2pta3AxbGU1MG53YTNxbXU3aGticHZzdCJ9.M0-65A2h_G5lWZZTeMD3uw';

export default class Map extends Component {
  componentDidMount () {
    this.buildMap();
  }

  buildBasemapLayer () {
    return new TileLayer({ source: new OSM() });
  }

  buildMap () {
    return new olMap({
      layers: [this.buildBasemapLayer()],
      target: 'map',
      view: this.buildView(),
    });
  }

  buildView () {
    return new View();
  }

  render () {
    return <div id="map" className={styles.map} />;
  }
}
