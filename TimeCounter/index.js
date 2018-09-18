import React, { PureComponent } from 'react';

import Background from './Background';
import Button from './HomeButton';
import Menu from './Menu';
import Title from './Title';

export default class TimeCounter extends PureComponent {
  render() {
    return (
      <Background>
        <Title text="Time Counter" />
        <Menu>
          <Button title="New game" />
          <Button title="Leaderboard" />
          <Button title="Settings" />
        </Menu>
      </Background>
    );
  }
}
