import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import MainPage from './components/MainPage';


const store = configureStore()

export default () =>
  <Provider store={store}>
    <MainPage />
  </Provider>
