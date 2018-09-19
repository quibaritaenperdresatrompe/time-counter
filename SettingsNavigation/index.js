import { createMaterialTopTabNavigator } from 'react-navigation';

import { black, yellow } from '../ui/colors';
import { SettingsNative, SettingsWeb } from '../routing';
import SettingsScreen from '../SettingsScreen';
import WebSettingsScreen from '../WebSettingsScreen';

export default createMaterialTopTabNavigator(
  {
    [SettingsNative]: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings Native',
      },
    },
    [SettingsWeb]: {
      screen: WebSettingsScreen,
      navigationOptions: {
        title: 'Settings Web',
      },
    },
  },
  {
    initialRouteName: SettingsNative,
    tabBarPosition: 'bottom',
    swipeEnable: true,
    animationEnabled: true,
    tabBarOptions: {
      labelStyle: {
        fontWeight: '700',
      },
      style: {
        backgroundColor: black,
      },
      indicatorStyle: {
        backgroundColor: yellow,
      },
    },
  },
);
