import { Text } from 'react-native';
import React, { PureComponent } from 'react';

import Background from '../ui/Background';

export default class NewGameScreen extends PureComponent {
  render() {
    return (
      <Background>
        <Text>New Game</Text>
      </Background>
    );
  }
}
