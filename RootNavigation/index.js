import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../HomeScreen';
import LeaderboardScreen from '../LeaderboardScreen';
import NewGameScreen from '../NewGameScreen';
import SettingsScreen from '../SettingsScreen';

export const Home = 'Home';
export const Leaderboard = 'Leaderboard';
export const NewGame = 'New Game';
export const Settings = 'Settings';

const RootNavigation = createStackNavigator(
  {
    [Home]: {
      screen: HomeScreen,
    },
    [Leaderboard]: {
      screen: LeaderboardScreen,
    },
    [NewGame]: {
      screen: NewGameScreen,
    },
    [Settings]: {
      screen: SettingsScreen,
    },
  },
  {
    initialRouteName: Home,
  },
);

export default RootNavigation;
