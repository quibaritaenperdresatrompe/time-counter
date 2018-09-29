import { Platform, Text, View } from 'react-native';
import React, { PureComponent } from 'react';

import Background from '../../ui/Background';
import OsName from './OsName/index.android';
import styles from './styles';

export default class SettingsScreen extends PureComponent {
  render() {
    return (
      <Background>
        <View style={styles.wrapper}>
          <OsName />
          <Text style={styles.osVersion}>{`v${Platform.Version}`}</Text>
        </View>
      </Background>
    );
  }
}
