import { Constants } from 'expo';
import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FECB20',
    height: '100%',
    paddingTop: Constants.statusBarHeight,
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
