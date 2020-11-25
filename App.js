import React from 'react';
import HomePage from './src/screens/HomePage';
import store from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
