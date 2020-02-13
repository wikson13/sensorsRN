import React from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

const Loading = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ActivityIndicator animating={true} size="large" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default Loading;
