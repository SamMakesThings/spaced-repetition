import React from 'react';
import { Text, View } from 'react-native';
import Expo from 'expo';
import styles from './styles';

const TestScreen = () => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
  </View>
);

async function signInWithGoogleAsync() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: ,
      iosClientId: '941569683745-16htoejldtnkuakqmlics01p0injmclb.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      return {cancelled: true};
    } else {
      return {error: true};
    }
  }
}

export default TestScreen;
