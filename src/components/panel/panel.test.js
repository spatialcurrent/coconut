import React from 'react';
import { shallow } from 'enzyme';
import Panel from './panel.component';

let props;

describe('Component: Panel', () => {
  beforeEach(() => {
    props = {
      feature: {
        id: 1,
        name: 'Popeyes',
      },
      clearFeature: jest.fn(),
    };
    global.window.outerWidth = 900;
  });

  it('renders', () => {
    const component = shallow(<Panel {...props} />);
    const panel = component.find('.panel');
    expect(panel.exists()).toBe(true);
  });

  it('uses the name for a title if it exists', () => {
    const component = shallow(<Panel {...props} />);
    const title = component.find('WithStyles(Typography)');
    const text = title.children().first().text();
    expect(text).toEqual(`Name: ${props.feature.name}`);
  });

  it('users the id for a title if the name doesn\'t exist', () => {
    const feature = { id: 1 };
    const component = shallow(<Panel {...props} feature={feature} />);
    const title = component.find('WithStyles(Typography)');
    const text = title.children().first().text();
    expect(text).toEqual(`Id: ${feature.id}`);
  });

  it('opens from the right on desktop', () => {
    const component = shallow(<Panel {...props} />);
    const panel = component.find('.panel');
    expect(panel.prop('anchor')).toEqual('right');
  });

  it('opens from below on mobile', () => {
    global.window.outerWidth = 500;
    const component = shallow(<Panel {...props} />);
    const panel = component.find('.panel');
    expect(panel.prop('anchor')).toEqual('bottom');
  });
});
