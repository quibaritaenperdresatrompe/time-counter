import { createMaterialTopTabNavigator } from 'react-navigation';

import { black, yellow } from '../ui/colors';
import { SETTINGS_NATIVE_ROUTE, SETTINGS_WEB_ROUTE } from '../config/routes';
import SettingsScreen from '../SettingsScreen';
import WebSettingsScreen from '../WebSettingsScreen';

export default createMaterialTopTabNavigator(
  {
    [SETTINGS_NATIVE_ROUTE]: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings Native',
      },
    },
    [SETTINGS_WEB_ROUTE]: {
      screen: WebSettingsScreen,
      navigationOptions: {
        title: 'Settings Web',
      },
    },
  },
  {
    initialRouteName: SETTINGS_NATIVE_ROUTE,
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
