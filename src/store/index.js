import {createStore} from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const store = createStore(
  reducers, /* preloadedState, */
  composeEnhancers(
  // other store enhancers if any
));
export default store;
