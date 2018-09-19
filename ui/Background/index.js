import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

import { black, yellow } from '../colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: yellow,
    height: '100%',
    width: '100%',
  },
  darkBackground: {
    backgroundColor: black,
  },
});

class Background extends Component {
  render() {
    const { children, dark } = this.props;

    return (
      <View style={[styles.background, dark && styles.darkBackground]}>
        {children}
      </View>
    );
  }
}

Background.defaultProps = {
  children: null,
};

export default Background;
