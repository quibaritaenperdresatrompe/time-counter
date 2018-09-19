import { Platform, Text } from 'react-native';
import React from 'react';

import capitalize from '../../lib/capitalize';
import styles from './styles';

export default () => (
  <Text style={styles.osName}>{capitalize(Platform.OS)}</Text>
);
