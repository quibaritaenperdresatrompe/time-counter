import { createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import React from 'react';

import { black, white } from '../ui/colors';
import { Home, Leaderboard, NewGame, Settings } from '../config/routes';
import BackIcon from '../assets/back-icon.png';
import HeaderTitle from '../ui/HeaderTitle';
import HomeScreen from '../HomeScreen';
import LeaderboardScreen from '../LeaderboardScreen';
import NewGameScreen from '../NewGameScreen';
import SettingsNavigation from '../SettingsNavigation';

export default createStackNavigator(
  {
    [Home]: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    [Leaderboard]: {
      screen: LeaderboardScreen,
    },
    [NewGame]: {
      screen: NewGameScreen,
    },
    [Settings]: {
      screen: SettingsNavigation,
    },
  },
  {
    initialRouteName: Home,
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
