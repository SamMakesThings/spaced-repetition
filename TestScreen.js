import React from 'react';
import { Text, View, Button } from 'react-native';
import Expo from 'expo';
import styles from './styles';

async function signInWithGoogleAsync() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: '941569683745-oagev6im7lkbr1549hdct0rdnm547mj6.apps.googleusercontent.com',
      iosClientId: '941569683745-16htoejldtnkuakqmlics01p0injmclb.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      return { cancelled: true };
    }
    return { error: true };
  } catch (e) {
    return { error: true };
  }
}

const TestScreen = () => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
    <Button title="gAuth" onPress={signInWithGoogleAsync} />
  </View>
);

export default TestScreen;
