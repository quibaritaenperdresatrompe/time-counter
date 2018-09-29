import { Text } from 'react-native';
import { toUpper } from 'ramda';
import React, { PureComponent } from 'react';

import styles from './styles';

class Title extends PureComponent {
  render() {
    const { text } = this.props;

    return <Text style={styles.title}>{toUpper(text)}</Text>;
  }
}

Title.defaultProps = {
  text: null,
};

export default Title;
