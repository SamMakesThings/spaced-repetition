import React from 'react';
import {
  Text, View, Alert, StyleSheet,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
// import styles from './styles';

const swiperStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  card: {
    flex: 0.8,
    borderRadius: 9,
    justifyContent: 'center',
    backgroundColor: '#95AE3C',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});

const SwiperScreen = () => (
  <View style={swiperStyles.container}>
    <Swiper
      cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
      renderCard={card => (
        <View style={swiperStyles.card}>
          <Text style={swiperStyles.text}>{card}</Text>
        </View>
      )}
      onSwiped={() => 0}
      // use 'cardIndex' as a property on this one for use in the arrow function
      onSwipedAll={() => {
        Alert.alert(
          'You swiped through everything',
          'Message',
          [{ text: 'Sure', onPress: () => 0 }, { text: 'OK', onPress: () => 0 }],
          { cancelable: true },
        );
      }}
      cardIndex={0}
      backgroundColor="#F6F7FB"
      stackSize={3}
    />
  </View>
);

export default SwiperScreen;
