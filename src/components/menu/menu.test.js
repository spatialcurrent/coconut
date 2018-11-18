import React from 'react';
import { shallow } from 'enzyme';
import Menu from './menu.component';

let props;

describe('Component: Menu', () => {
  beforeEach(() => {
    props = {
      closeMenu: jest.fn(),
      openMenu: jest.fn(),
      showMenu: false,
    };
  });

  it('renders', () => {
    const component = shallow(<Menu {...props} />);
    const menu = component.find('.menu');
    expect(menu.exists()).toBe(true);
  });

  it('renders all links', () => {
    const component = shallow(<Menu {...props} />);
    const links = component.find('Link');
    expect(links).toHaveLength(1);
    expect(links.first().prop('to')).toBe('/queries');
  })
});
