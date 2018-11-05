import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const buildStore = () => {
  const composeTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  return createStore(reducer, composeTool(applyMiddleware(thunk)));
};

export default buildStore;
