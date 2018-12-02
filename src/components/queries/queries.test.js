import React from 'react';
import { shallow } from 'enzyme';
import Queries from './queries.component';

let props;
describe('Component: Queries', () => {
  beforeEach(() => {
    props = {
      favoriteQuery: jest.fn(),
      getFeatures: jest.fn(),
      history: { push: jest.fn() },
      loadQueries: jest.fn(),
      queries: [],
      unfavoriteQuery: jest.fn(),
    };
  });

  it('renders', () => {
    const component = shallow(<Queries {...props} />);
    const queries = component.find('.queries');
    expect(queries.exists()).toBe(true);
  });

  it('calls loadQueries if the queries array has a length of 0', () => {
    const component = shallow(<Queries {...props} />);
    expect(props.loadQueries).toHaveBeenCalledTimes(1);
  });
});
