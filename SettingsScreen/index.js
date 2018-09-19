import { Text } from 'react-native';
import React, { PureComponent } from 'react';

import Background from '../ui/Background';

export default class SettingsScreen extends PureComponent {
  render() {
    return (
      <Background>
        <Text>Settings</Text>
      </Background>
    );
  }
}
