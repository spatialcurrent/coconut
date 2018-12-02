import React from 'react';
import { shallow } from 'enzyme';
import Map from './map.component';

let props;

describe('Component: Map', () => {
  beforeEach(() => {
    props = {
      clearFeature: jest.fn(),
      feature: null,
      features: null,
      setFeature: jest.fn(),
    };
  });

  it('renders', () => {
    const component = shallow(<Map {...props} />);
    const map = component.find('.map');
    expect(map.exists()).toBe(true);
  });

  it('initializes the map properly', () => {
    const component = shallow(<Map {...props} />);
    const { map } = component.state();
    expect(map).toBeTruthy();
  });

  it('adds a layer when it receives features', () => {
    const features = {
      numberOfFeatures: 1,
      features: [{ geometry: { coordinates:[-77.030191, 38.917137], type: "Point"}, geometry_name:"the_geom", id: 1, properties: { id: 1 }, type:"Feature" }],
      type: 'FeatureCollection',
    };
    const component = shallow(<Map {...props} />);
    component.setProps({ features });
    const { layer, select } = component.state();
    expect(layer).toBeTruthy();
    expect(select).toBeTruthy();
  });
});
