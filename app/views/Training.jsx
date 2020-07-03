import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Styles from '../styles/Styles';
import MultiplierText from '../components/MultiplierText';

export default Training = ({ route }) => {
  const [index, setIndex] = useState(0);

  const getRandomIndex = (arr) => arr[Math.floor((Math.random()*arr.length))];

  let tables = [];
  for (let i = 1; i <= 10; i++) {
    tables.push(i);
  };

  useEffect(() => {
    setIndex(getRandomIndex(tables));
  }, [])

  return (
    <View style={ Styles.screenView }>
      <View style={customStyles.cardContainer}>
        <View style={ customStyles.card }>
          <MultiplierText
            tableNumber={route.params.table}
            index={index}
          />
        </View>
      </View>
    </View>
  );
};

const customStyles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  card: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 6,
    padding: 24,
    margin: 24,
    backgroundColor: '#ffffff'
  }
});
