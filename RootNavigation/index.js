import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../HomeScreen';
import SettingsScreen from '../SettingsScreen';

export const Home = 'Home';
export const Settings = 'Settings';

const RootNavigation = createStackNavigator({
  [Home]: {
    screen: HomeScreen,
  },
  [Settings]: {
    screen: SettingsScreen,
  },
});

export default RootNavigation;
