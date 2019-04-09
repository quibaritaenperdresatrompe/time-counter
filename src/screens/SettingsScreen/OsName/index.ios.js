import { Platform, Text } from 'react-native';
import React from 'react';

import uncapitalize from '../../../lib/uncapitalize';
import styles from './styles';

export default () => <Text style={styles.osName}>{uncapitalize(Platform.OS)}</Text>;
