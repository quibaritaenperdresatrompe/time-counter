import { View } from 'react-native';
import React, { PureComponent } from 'react';

import Background from './Background';
import Title from './Title';
import Button from './HomeButton';

export default class TimeCounter extends PureComponent {
  render() {
    return (
      <Background>
        <Title text="Time Counter" />
        <View>
          <Button title="New game" />
          <Button title="Leaderboard" />
          <Button title="Settings" />
        </View>
      </Background>
    );
  }
}
