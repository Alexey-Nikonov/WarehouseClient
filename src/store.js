import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootNavigator from './router';

import mainReducer from './reducers/index';

const navReducer = (state, action) => {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
}

const rootReducer = combineReducers({
  nav: navReducer,
  data: mainReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));