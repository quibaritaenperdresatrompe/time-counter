import { FlatList, View } from 'react-native';
import React, { PureComponent } from 'react';

import Background from '../../ui/Background';
import pad from '../../lib/pad';
import Score from './Score';
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
        const scores = response;
        const sortedScores = scores.sort((a, b) => b.score - a.score);
        const padLength = sortedScores.length.toString().length;
        const parsedScores = sortedScores.map((score, index) => {
          const rank = index + 1;
          const displayedRank = pad(rank, padLength);
          return {
            ...score,
            rank,
            displayedRank,
          };
        });

        this.setState(() => ({
          scores: parsedScores,
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
