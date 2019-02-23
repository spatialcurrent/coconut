import React from 'react';
import { shallow } from 'enzyme';
import Loader from './loader.component';

describe('Component: Loader', () => {
  it('renders', () => {
    const component = shallow(<Loader showLoader={true} closeLoader={jest.fn()} />);
    const loader = component.find('.loader');
    expect(loader.exists()).toBe(true);
  });

  it('doesn\'t render if showLoader is false', () => {
    const component = shallow(<Loader showLoader={false} closeLoader={jest.fn()} />);
    const loader = component.find('.loader');
    expect(loader.exists()).toBe(false);
  });
});
