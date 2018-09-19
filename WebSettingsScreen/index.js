import React, { PureComponent } from 'react';
import { WebView } from 'react-native';

import Background from '../ui/Background';

export default class WebSettingsScreen extends PureComponent {
  render() {
    return (
      <Background>
        <WebView source={{ uri: 'https://github.com/facebook/react-native' }} />
      </Background>
    );
  }
}
