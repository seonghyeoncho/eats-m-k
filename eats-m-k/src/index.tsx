import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/organisms/Router/Router';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules';
import Thunk from 'redux-thunk';
import { CookiesProvider } from 'react-cookie';

const store = createStore(rootReducer, applyMiddleware(Thunk));



ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  </CookiesProvider>, 
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

