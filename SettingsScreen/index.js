import { Platform, Text, View } from 'react-native';
import React, { PureComponent } from 'react';

import Background from '../ui/Background';
import capitalize from '../lib/capitalize';
import styles from './styles';

export default class SettingsScreen extends PureComponent {
  render() {
    return (
      <Background>
        <View style={styles.wrapper}>
          <Text style={styles.osName}>{capitalize(Platform.OS)}</Text>
          <Text style={styles.osVersion}>{`v${Platform.Version}`}</Text>
        </View>
      </Background>
    );
  }
}
