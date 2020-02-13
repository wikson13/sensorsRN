/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'react-native-paper';
import AppBar from './components/AppBar';
import {TextInput} from 'react-native-paper';
import SigninScreen from './screens/SigninScreen';
import {useDispatch, useSelector} from 'react-redux';
import {
  incrementCounter,
  incrementCounterAsync,
} from './redux/counter/counterActions';
import Loading from './components/Loading';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './navigation/authNavigation';
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
      {/*<Loading />*/}
      {/*<SigninScreen />*/}
      {/*<StatusBar barStyle="dark-content" />*/}
      {/*<AppBar />*/}

      {/*<View style={styles.container}>*/}
      {/*<Text>dd</Text>*/}

      {/*</View>*/}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});

export default App;
