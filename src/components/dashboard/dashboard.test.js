import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './dashboard.component';

describe('Component: Dashboard', () => {
  it('renders with expected children', () => {
    const component = shallow(<Dashboard />);
    const dashboard = component.find('.dashboard');
    const navBar = component.find('Connect(NavBar)');
    const panel = component.find('Connect(Panel)');
    const map = component.find('Connect(Map)');
    const queryInfo = component.find('Connect(QueryInfo)');
    expect(dashboard.exists()).toBe(true);
    expect(navBar.exists()).toBe(true);
    expect(panel.exists()).toBe(true);
    expect(map.exists()).toBe(true);
    expect(queryInfo.exists()).toBe(true);
  });
});
