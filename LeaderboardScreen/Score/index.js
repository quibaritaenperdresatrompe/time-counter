import { StyleSheet, Text, View } from 'react-native';
import React, { PureComponent } from 'react';
import { white, blue } from '../../ui/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: blue,
    flexDirection: 'row',
    padding: 15,
  },
  mainWrapper: {
    backgroundColor: 'red',
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
    color: white,
  },
  leftText: {
    textAlign: 'left',
  },
  rightText: {
    textAlign: 'right',
  },
});

export default class Score extends PureComponent {
  render() {
    const { username, rank, score } = this.props;

    return (
      <View style={[styles.wrapper, rank === 1 && styles.mainWrapper]}>
        <Text style={[styles.text, styles.leftText]}>{rank}</Text>
        <Text style={[styles.text, styles.leftText]}>{username}</Text>
        <Text style={[styles.text, styles.rightText]}>{score}</Text>
      </View>
    );
  }
}
