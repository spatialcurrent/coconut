import React from 'react';
import { shallow } from 'enzyme';
import Alert from './alert.component';

describe('Component: Alert', () => {
  it('renders', () => {
    const component = shallow(<Alert alert={false} closeAlert={jest.fn()} />);
    const alert = component.find('.content');
    expect(alert.exists()).toBe(true);
  });
});
