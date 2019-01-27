import React from 'react';
import { shallow } from 'enzyme';
import Download from './download.component';

describe('Component: Downlad', () => {
  it('renders', () => {
    const component = shallow(<Download service="service" />);
    const download = component.find('.button');
    expect(download.exists()).toBe(true);
  });
});
