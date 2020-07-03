import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default MultiplierText = (props) => {
  return (
    <Text style={styles.mainText}>{props.tableNumber} x {props.index} = ?</Text>
  )
};

const styles = StyleSheet.create({
  mainText: {
    textAlign: "center",
    fontSize: 30  
  }
});
