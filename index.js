/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import store from './redux/store/store';
import {Provider} from 'react-redux';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3742fa',
    accent: 'yellow',
  },
};

const AppBox = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppBox);
