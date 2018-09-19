import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

import { yellow } from '../colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: yellow,
    height: '100%',
    width: '100%',
  },
});

class Background extends Component {
  render() {
    const { children } = this.props;

    return <View style={styles.background}>{children}</View>;
  }
}

Background.defaultProps = {
  children: null,
};

export default Background;
