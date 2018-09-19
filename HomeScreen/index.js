import React, { PureComponent } from 'react';

import { Settings } from '../RootNavigation';
import Background from '../ui/Background';
import Button from '../ui/HomeButton';
import Menu from './Menu';
import Title from './Title';

export default class HomeScreen extends PureComponent {
  handleButtonPress = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  render() {
    return (
      <Background>
        <Title text="Time Counter" />
        <Menu>
          <Button title="New game" />
          <Button title="Leaderboard" />
          <Button title={Settings} onPress={this.handleButtonPress(Settings)} />
        </Menu>
      </Background>
    );
  }
}
