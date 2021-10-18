import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen, PatientScreen } from './screens';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Пациенты',
      headerTintColor: '#2a86ff',
    },
  },
  Patient: {
    screen: PatientScreen,
    navigationOptions: {
      title: 'О пациенте',
      headerTintColor: '#2a86ff',
      headerTitleContainerStyle: {
        left: 47,
      },
    },
  },
});

export default createAppContainer(AppNavigator);
