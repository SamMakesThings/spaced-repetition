import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
// import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import StudyScreen from './StudyScreen';
import TestScreen from './TestScreen';
import SwiperScreen from './SwiperScreen';

// initialize firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCEF1MlSTnVb7siwMEk1kLIKhL3QjplTsk',
  authDomain: 'grown-spaced-repetition.firebaseapp.com',
  databaseURL: 'https://grown-spaced-repetition.firebaseio.com/',
  storageBucket: 'grown-spaced-repetition.appspot.com',
  projectId: 'grown-spaced-repetition',
};

firebase.initializeApp(firebaseConfig);

const App = createMaterialTopTabNavigator(
  {
    Home: {
      screen: TestScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="person" size={30} color={tintColor} />,
      },
    },
    Study: {
      screen: SwiperScreen,
      navigationOptions: {
        tabBarLabel: 'Study',
        tabBarIcon: ({ tintColor }) => <Icon name="book" size={30} color={tintColor} />,
      },
    },
    Profile: {
      screen: StudyScreen,
      navigationOptions: {
        tabBarLabel: 'Browse',
        tabBarIcon: ({ tintColor }) => <Icon name="note" size={30} color={tintColor} />,
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#fff',
        paddingTop: 29,
        paddingBottom: 5,
      },
      showIcon: true,
      showLabel: false,
      activeTintColor: '#95AE3C',
      inactiveTintColor: '#C7CBD4',
      indicatorStyle: {
        backgroundColor: '#fff',
      },
    },
  },
);

export default App;
