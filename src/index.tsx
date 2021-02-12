import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/Router';
import { Provider } from 'react-redux';
import store from './redux';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>, 
  document.getElementById('root')
);
