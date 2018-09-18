import { Button } from 'react-native-elements';
import { toUpper } from 'ramda';
import React from 'react';

export default ({ title }) => (
  <Button
    title={toUpper(title)}
    buttonStyle={{
      backgroundColor: '#524960',
      borderRadius: 5,
      color: 'white',
      marginBottom: 20,
      marginTop: 20,
    }}
  />
);
