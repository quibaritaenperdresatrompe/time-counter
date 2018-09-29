import { Text, View } from 'react-native';
import React from 'react';

import styles from './styles';

export default ({ displayedRank, rank, score, username }) => (
  <View style={[styles.wrapper, rank === 1 && styles.mainWrapper]}>
    <Text style={[styles.text, styles.rank]}>{displayedRank}</Text>
    <Text style={[styles.text, styles.username]}>{username}</Text>
    <Text style={[styles.text, styles.score]}>{score}</Text>
  </View>
);
