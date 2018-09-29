import { Platform, StyleSheet } from 'react-native';

import { black, blue } from '../../../ui/colors';

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
});
