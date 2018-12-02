import React from 'react';
import { shallow } from 'enzyme';
import QueryInfo from './query-info.component';

describe('Component: QueryInfo', () => {
  it('renders', () => {
    const query = {};
    const component = shallow(<QueryInfo query={query} />);
    const button = component.find('.button');
    const dialog = component.find('WithStyles(Dialog)');
    expect(button.exists()).toBe(true);
    expect(dialog.exists()).toBe(true);
  });

  it('renders with a disabled button if query is null', () => {
    const component = shallow(<QueryInfo />);
    const button = component.find('.button');
    expect(button.prop('disabled')).toEqual(true);
  });
});
