import { Text } from 'react-native';
import { toUpper } from 'ramda';
import React from 'react';

import styles from './styles';

export default ({ title }) => (
  <Text style={styles.headerTitle}>{toUpper(title)}</Text>
);
