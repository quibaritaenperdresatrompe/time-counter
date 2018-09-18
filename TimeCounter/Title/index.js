import { StyleSheet, Text } from 'react-native';
import React, { PureComponent } from 'react';

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#4A9EE6',
    color: 'white',
    fontSize: 40,
    padding: 20,
    textAlign: 'center',
    width: '100%',
  },
});

class Title extends PureComponent {
  render() {
    const { text } = this.props;

    return <Text style={styles.title}>{text}</Text>;
  }
}

Title.defaultProps = {
  text: null,
};

export default Title;
