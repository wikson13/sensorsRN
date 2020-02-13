import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Button, Text, TextInput, HelperText} from 'react-native-paper';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../redux/auth/authActions';

const SigninScreen = () => {
  const [email, setEmail] = useState('test@test.pl');
  const [password, setPassword] = useState('wiktor13');
  const [isLogin, setIsLogin] = useState(true);
  const error = useSelector(state => state.auth.err);

  const dispatch = useDispatch();
  const signinButtonHandler = () => {
    dispatch(authActions.authRequest({email, password, isLogin}));
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>{isLogin ? 'Sign in' : 'Sign up'}</Text>

      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        mode="outlined"
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <TextInput
        style={styles.input}
        label="Password"
        value={password}
        mode="outlined"
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <HelperText type="error" visible={error} style={styles.helperText}>
        {error && error.message}
      </HelperText>
      <Button
        dark={true}
        mode="contained"
        onPress={signinButtonHandler}
        style={styles.button}>
        {!isLogin ? 'sign up' : 'sign in'}
      </Button>
      <Button
        color="lightgray"
        dark={false}
        mode="contained"
        onPress={() => setIsLogin(!isLogin)}
        style={styles.button}>
        {isLogin ? 'Switch to sign up' : 'Switch to sign in'}
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    marginTop: 200,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 7,
  },
  helperText: {
    textAlign: 'center',
  },
});

export default SigninScreen;
