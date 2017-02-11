import { createStore } from 'redux';
import reducer from './reducer';
import DEBUG from './debug';

let debugMiddleware = null;
if (DEBUG) {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    debugMiddleware = devToolsExtension();
  }
}

const store = createStore(reducer, debugMiddleware);

export default store;
