import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

const buildStore = () => {
  const composeTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  return createStore(rootReducer, composeTool(applyMiddleware(thunk)));
};

export default buildStore;
