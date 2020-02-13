import React, {useEffect} from 'react';
import {View} from 'react-native';
import Loading from '../components/Loading';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import * as authActions from '../redux/auth/authActions';
import AuthNavigation from '../navigation/AuthNavigation';

const StartupScreen = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);
  const isLoading = useSelector(state => state.auth.loading);
  useEffect(() => {
    // AsyncStorage.getItem('userData').then(res => console.log(res));
    dispatch(authActions.authStorageRequest());
  }, []);
  return <>{isLoading ? <Loading /> : <AuthNavigation />}</>;
};

export default StartupScreen;
