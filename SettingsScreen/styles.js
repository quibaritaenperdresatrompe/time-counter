import { Platform, StyleSheet } from 'react-native';
import { black, blue } from '../ui/colors';

const textColor = Platform.select({
  ios: {
    color: blue,
  },
  android: {
    color: black,
  },
});

export default StyleSheet.create({
  osName: {
    fontSize: 70,
    ...textColor,
  },
  osVersion: {
    fontSize: 30,
    color: black,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
});
