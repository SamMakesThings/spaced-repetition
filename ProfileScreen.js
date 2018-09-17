import React from 'react';
// import { Text, Button } from 'react-native';
import {
  Text,
  Button,
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Icon,
  Right,
  Title,
} from 'native-base';
import { Expo } from 'expo';
// import styles from './styles';

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

const ProfileScreen = () => (
  /* <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
  </View> */
  <Container>
    <Content>
      <List>
        <ListItem button>
          <Left>
            <Button
              title="tests"
              onPress={signInWithGoogleAsync}
              style={{ backgroundColor: '#95AE3C' }}
            >
              <Icon active name="plane" />
            </Button>
          </Left>
          <Body>
            <Title>Press here to sign in with Google</Title>
          </Body>
          <Right />
        </ListItem>
        <ListItem>
          <Text>This is a second list item</Text>
        </ListItem>
        <ListItem>
          <Button title="gAuth" onPress={signInWithGoogleAsync} />
        </ListItem>
      </List>
    </Content>
  </Container>
);

export default ProfileScreen;
