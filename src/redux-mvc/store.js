import { createStore } from 'redux';
import reducer from './reducer';

import DEBUG from './debug';

let store;

if (DEBUG && typeof window.devToolsExtension === 'function') {
  store = createStore(reducer, window.devToolsExtension());
} else {
  store = createStore(reducer);
}

export default store;
