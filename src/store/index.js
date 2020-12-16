import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const store = createStore(
  reducers, /* preloadedState, */
  composeEnhancers(
  // other store enhancers if any
  applyMiddleware(thunk),
));
export default store;
