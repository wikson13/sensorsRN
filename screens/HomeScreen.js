import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {authLogout} from '../redux/auth/authActions';
const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => dispatch(authLogout())}>logout</Button>
    </View>
  );
};

export default HomeScreen;
