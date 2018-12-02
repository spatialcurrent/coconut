import React from 'react';
import { shallow } from 'enzyme';
import { App } from './app.component';

describe('Component: App', () => {
  it('renders', () => {
    const component = shallow(<App location={{ pathname: '' }} />);
    const app = component.find('.app');
    expect(app.exists()).toBe(true);
  });

  it('redirects to /queries upon initial load if pathname is not /queries', () => {
    const component = shallow(<App location={{ pathname: '' }} />);
    component.setState({ hasRedirected: false });
    const redirect = component.find('Redirect');
    expect(redirect.exists()).toBe(true);
  });

  it('doesn\'t redirect to /queries if pathname is not /queries ', () => {
    const component = shallow(<App location={{ pathname: '/queries' }} />);
    component.setState({ hasRedirected: false });
    const redirect = component.find('Redirect');
    expect(redirect.exists()).toBe(false);
  });
});
