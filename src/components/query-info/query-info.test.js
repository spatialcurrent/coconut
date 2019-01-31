import React from 'react';
import { shallow } from 'enzyme';
import QueryInfo from './query-info.component';

describe('Component: QueryInfo', () => {
  it('renders', () => {
    const query = {};
    const component = shallow(
      <QueryInfo
        closeQueryInfo={jest.fn()}
        query={query}
        showQueryInfo={true}
      />
    );
    const dialog = component.find('WithStyles(Dialog)');
    expect(dialog.exists()).toBe(true);
  });
});
