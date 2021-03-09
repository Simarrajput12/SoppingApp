import React, { Component } from 'react';
import Route from '../src/routes';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import returnStoreAndPersistor from './redux/reducers/index';

const { store, persistor } = returnStoreAndPersistor();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Route />
        </PersistGate>
      </Provider>
    );
  }
}