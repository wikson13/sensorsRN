import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {View} from 'react-native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
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
      <Button
        dark={true}
        mode="contained"
        onPress={() => console.log('login', email, password)}
        style={styles.button}>
        Sign in
      </Button>
      <Button
        color="lightgray"
        dark={false}
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={styles.button}>
        Sign up
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
});

export default SignIn;
