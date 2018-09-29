import { createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import React from 'react';

import { black, white } from '../../ui/colors';
import {
  HOME_ROUTE,
  LEADERBOARD_ROUTE,
  NEW_GAME_ROUTE,
  SETTINGS_ROUTE,
} from '../../config/routes';
import BackIcon from '../../assets/back-icon.png';
import HeaderTitle from '../../ui/HeaderTitle';
import HomeScreen from '../../screens/HomeScreen';
import LeaderboardScreen from '../../screens/LeaderboardScreen';
import NewGameScreen from '../../screens/NewGameScreen';
import SettingsNavigation from '../SettingsNavigation';

export default createStackNavigator(
  {
    [HOME_ROUTE]: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    [LEADERBOARD_ROUTE]: {
      screen: LeaderboardScreen,
    },
    [NEW_GAME_ROUTE]: {
      screen: NewGameScreen,
    },
    [SETTINGS_ROUTE]: {
      screen: SettingsNavigation,
    },
  },
  {
    initialRouteName: HOME_ROUTE,
    navigationOptions: {
      headerStyle: {
        backgroundColor: black,
        height: 80,
      },
      headerTintColor: white,
      headerTitle: <HeaderTitle title="Retour" />,
      headerBackImage: <Image source={BackIcon} />,
    },
  },
);
