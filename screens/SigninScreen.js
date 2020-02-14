import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {
  Button,
  Text,
  TextInput,
  HelperText,
  IconButton,
} from 'react-native-paper';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../redux/auth/authActions';

const SigninScreen = () => {
  const [email, setEmail] = useState('test@test.pl');
  const [password, setPassword] = useState('wiktor13');
  const [isLogin, setIsLogin] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
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
      <View>
        <TextInput
          style={styles.input}
          label="Password"
          value={password}
          mode="outlined"
          secureTextEntry={hidePassword}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <IconButton
          icon="eye"
          color="#aaa"
          size={35}
          onPress={() => setHidePassword(!hidePassword)}
          style={styles.hidePasswordButton}
        />
      </View>
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
      {isLogin ? (
        <Button color="#aaa" onPress={() => alert('reset')}>
          Reset password
        </Button>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'center',
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
  hidePasswordButton: {
    position: 'absolute',
    right: 1,
    top: 13,
  },
});

export default SigninScreen;
