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
import SignIn from './components/SignIn';
import {useDispatch, useSelector} from 'react-redux';
import {
  incrementCounter,
  incrementCounterAsync,
} from './redux/counter/counterActions';

const App: () => React$Node = () => {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <>
      {/*<SignIn />*/}
      {/*<StatusBar barStyle="dark-content" />*/}
      <AppBar />
      <Text>{counter}</Text>
      <Button onPress={() => dispatch(incrementCounter())}>+</Button>
      <Button onPress={() => dispatch(incrementCounterAsync())}>a+</Button>
      {/*<View style={styles.container}>*/}
      {/*<Text>dd</Text>*/}

      {/*</View>*/}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});

export default App;
