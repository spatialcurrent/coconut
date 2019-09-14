import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Queries from './queries.component';

let props;
let queries;

describe('Component: Queries', () => {
  beforeEach(() => {
    props = {
      favoriteQuery: jest.fn(),
      history: { push: jest.fn() },
      loadQueries: jest.fn(),
      queries: [],
      unfavoriteQuery: jest.fn(),
    };

    queries = [
      { datastore: 'amenities', description: 'random test query', favorite: false, name: 'thai food', title: 'Thai food' },
      { datastore: 'amenities', description: 'random test query', favorite: true, name: 'donute stores', title: 'Donuts!!!' },
      { datastore: 'amenities', description: 'random test query', favorite: false, name: 'bars', title: 'Bars' },
      { datastore: 'amenities', description: 'random test query', favorite: false, name: 'coffee shops', title: 'Coffee shops' }
    ];
  });

  it('renders', () => {
    const component = shallow(<Queries {...props} />);
    const queries = component.find('.queries');
    expect(queries.exists()).toBe(true);
  });

  describe('queries haven\'t loaded yet', () => {
    it('calls loadQueries', () => {
      const component = shallow(<Queries {...props} />);
      expect(props.loadQueries).toHaveBeenCalledTimes(1);
    });

    it('renders loading graphic', () => {
      const component = shallow(<Queries {...props} />);
      const loader = component.find('.loader');
      expect(loader.exists()).toBe(true);
    });
  });

  describe('queries are loaded', () => {
    it('doesn\'t render a loading graphic', () => {
      const component = shallow(<Queries {...props} queries={queries} />);
      const loader = component.find('.loader');
      expect(loader.exists()).toBe(false);
    });

    it('sorts them alphabetically with favorites at the top', () => {
      const component = mount(<BrowserRouter><Queries {...props} queries={queries} /></BrowserRouter>);
      const cards = component.find('CardHeader');
      expect(cards.first().text()).toContain('Donuts!!!');
      expect(cards.at(1).text()).toContain('Bars');
      expect(cards.at(2).text()).toContain('Coffee shops');
      expect(cards.at(3).text()).toContain('Thai food');
    });
  });

  describe('search', () => {
    it('filters out queries that don\'t match the search value', () => {
      const component = mount(<BrowserRouter><Queries {...props} queries={queries} /></BrowserRouter>);
      component.find('input').simulate('change', { target: { value: 'cof' } });
      const cards = component.find('CardHeader');
      expect(cards).toHaveLength(1);
      expect(cards.text()).toContain('Coffee shops');
    });
  });
});
