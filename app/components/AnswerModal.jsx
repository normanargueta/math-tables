import React, { useState, useEffect } from 'react';
import { View, Modal, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default AnswerModal = ({visible, setVisibility, correctAnswer}) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (correctAnswer) {
      setDisplayText('Correcto :)');
    } else {
      setDisplayText('Incorrecto :(');
    }
  }, [correctAnswer]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={visible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{displayText}</Text>
            <TouchableHighlight
              style={styles.openButton}
              onPress={() => setVisibility(!visible)}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
