import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import reducer from './reducer';

// Store
const store0 = createStore(reducer);
const store1 = createStore(reducer);

ReactDOM.render(
  <div>
  <Provider store={store0}>
    <App />
  </Provider>
  <Provider store={store1}>
    <App />
  </Provider>
  </div>,
  document.body.appendChild(document.createElement('div'))
);
