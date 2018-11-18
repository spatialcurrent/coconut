import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './nav-bar.component';

describe('Component: NavBar', () => {
  it('renders', () => {
    const component = shallow(<NavBar openMenu={jest.fn()} />);
    const navBar = component.find('.appBar');
    expect(navBar.exists()).toBe(true);
  });
});
