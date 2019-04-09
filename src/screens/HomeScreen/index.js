import React, { PureComponent } from 'react';

import { LEADERBOARD_ROUTE, NEW_GAME_ROUTE, SETTINGS_ROUTE } from '../../config/routes';
import Background from '../../ui/Background';
import Button from '../../ui/HomeButton';
import Menu from './Menu';
import Title from './Title';

export default class HomeScreen extends PureComponent {
  handleButtonPress = route => () => {
    const { navigation } = this.props;
    navigation.navigate(route);
  };

  render() {
    return (
      <Background>
        <Title text="Time Counter" />
        <Menu>
          <Button title="New game" onPress={this.handleButtonPress(NEW_GAME_ROUTE)} />
          <Button title="Leaderboard" onPress={this.handleButtonPress(LEADERBOARD_ROUTE)} />
          <Button title="Settings" onPress={this.handleButtonPress(SETTINGS_ROUTE)} />
        </Menu>
      </Background>
    );
  }
}
