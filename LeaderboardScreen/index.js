import { FlatList, View } from 'react-native';
import React, { PureComponent } from 'react';

import Score from './Score';
import Background from '../ui/Background';
import styles from './styles';

export default class LeaderboardScreen extends PureComponent {
  constructor() {
    super();

    this.state = {
      scores: [],
    };
  }

  componentDidMount() {
    fetch('https://time-counter-api.herokuapp.com/leaderboard')
      .then(response => response.json())
      .then(response => {
        const scores = response
          .sort((a, b) => b.score - a.score)
          .map((score, index) => ({ ...score, rank: index + 1 }));

        this.setState(() => ({
          scores,
        }));
      });
  }

  scoreKeyExtractor = scoreResult => scoreResult.id;

  renderScore = ({ item }) => <Score {...item} />;

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { scores } = this.state;

    return (
      <Background dark>
        <FlatList
          data={scores}
          keyExtractor={this.scoreKeyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderScore}
        />
      </Background>
    );
  }
}
