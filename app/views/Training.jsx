import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';

import Styles from '../styles/Styles';
import MultiplierText from '../components/MultiplierText';
import AnswerModal from '../components/AnswerModal';

export default Training = ({ route }) => {
  const table = route.params.table;
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [tableIndexs, setTableIndexs] = useState([1, 2, 3, 4, 5, 6, 7, 8, 8, 10]);
  const [modalVisible, setModalVisibility] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const getRandomIndex = () => {
    const tables = tableIndexs;
    const randomIndex = Math.floor((Math.random() * tables.length))
    const randomValue = tables[randomIndex];
    tables.splice(randomIndex, 1);
    setTableIndexs(tables);

    return randomValue;
  };

  const verifyAnswer = () => {
    console.log(tableIndexs);
    if (tableIndexs.length > 0) {
      console.log('answer', answer);
      console.log('result', table * index == parseInt(answer, 10));
      setIsCorrectAnswer(table * index == parseInt(answer, 10));
      setModalVisibility(true);
      setIndex(getRandomIndex());
    }
  };

  useEffect(() => {
    setIndex(getRandomIndex());
  }, [])

  return (
    <View style={ Styles.screenView }>
      <View style={customStyles.cardContainer}>
        <View style={ customStyles.card }>
          <MultiplierText
            tableNumber={table}
            index={index}
          />
        </View>
        <View>
          <Text>Respuesta</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setAnswer(text)}
            value={answer}
            keyboardType={'numeric'}
          />
          <Button
            title="Verificar"
            onPress={() => verifyAnswer()}
          />
        </View>
        <AnswerModal
          visible={modalVisible}
          setVisibility={setModalVisibility}
          correctAnswer={isCorrectAnswer}
        />
      </View>
    </View>
  );
};

const customStyles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  card: {
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 6,
    padding: 24,
    margin: 24,
    backgroundColor: '#ffffff'
  }
});
