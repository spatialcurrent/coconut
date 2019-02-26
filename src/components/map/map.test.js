import React from 'react';
import { shallow } from 'enzyme';
import Map from './map.component';

let props;

describe('Component: Map', () => {
  beforeEach(() => {
    props = {
      addNote: jest.fn(),
      clearFeature: jest.fn(),
      closeLoader: jest.fn(),
      feature: null,
      openLoader: jest.fn(),
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
});
