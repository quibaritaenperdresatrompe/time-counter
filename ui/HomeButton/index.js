import { Button } from 'react-native-elements';
import { Dimensions, StyleSheet } from 'react-native';
import { toUpper } from 'ramda';
import React from 'react';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: '#524a60',
    marginBottom: 20,
    marginTop: 20,
    width: (width * 2) / 3,
  },
});

export default ({ onPress, title }) => (
  <Button
    title={toUpper(title)}
    buttonStyle={styles.button}
    fontSize={28}
    onPress={onPress}
  />
);
