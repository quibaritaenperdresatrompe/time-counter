import { StyleSheet } from 'react-native';

import { blue, white } from '../../ui/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: blue,
    flexDirection: 'row',
    padding: 20,
  },
  mainWrapper: {
    backgroundColor: 'red',
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
    color: white,
  },
  rank: {
    textAlign: 'left',
    flex: 1,
  },
  username: {
    textAlign: 'left',
    flex: 4,
  },
  score: {
    textAlign: 'right',
    flex: 1,
  },
});
