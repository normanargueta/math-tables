import React from 'react';
import { View, Text } from 'react-native';

import Styles from '../styles/Styles';

const Training = ({ route }) => {
  return (
    <View style={ Styles.screenView }>
      <Text>Training {route.params.table}</Text>
    </View>
  );
};

export default Training;
