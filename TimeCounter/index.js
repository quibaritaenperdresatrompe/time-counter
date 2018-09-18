import React, { PureComponent } from 'react';

import Background from './Background';
import Title from './Title';

export default class TimeCounter extends PureComponent {
  render() {
    return (
      <Background>
        <Title text="Time Counter" />
      </Background>
    );
  }
}
