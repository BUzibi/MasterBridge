import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  level: 'info',
});

const middlewares = [
  thunk,
  logger,
];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export default store;