import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Loading from '../components/Loading';
import SigninScreen from '../screens/SigninScreen';
import HomeScreen from '../screens/HomeScreen';

const authNavigation = () => {
  const Stack = createStackNavigator();
  // const isLoading = useSelector(state => state.auth.loading);
  const userToken = useSelector(state => state.auth.token);
  return (
    <Stack.Navigator>
      {userToken === null ? (
        // No token found, user isn't signed in
        <Stack.Screen
          name="SignIn"
          component={SigninScreen}
          options={{
            title: 'Sign in',
          }}
        />
      ) : (
        // User is signed in
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
};

export default authNavigation;
