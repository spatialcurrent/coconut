import React from 'react';
import { shallow } from 'enzyme';
import Loader from './loader.component';

describe('Component: Loader', () => {
  it('renders', () => {
    const component = shallow(<Loader showLoader={false} closeLoader={jest.fn()} />);
    const loader = component.find('.content');
    expect(loader.exists()).toBe(true);
  });
});
