import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';

import Doomsday from './doomsday';

global.STORE = store;

ReactDOM.render(
  <Provider store={store}>
    <Doomsday/>
  </Provider>
  ,
  document.getElementById('app')
);
