import React from 'react';
import { Button } from 'react-native';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tableitem = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{flexBasis: '30%', height: 100}}>
      <Button
        title={ props.name }
        style={{height: '100%'}}
        onPress={ () => navigation.navigate('Training', { table: props.name }) }
      />
    </View>
  )
};

export default Tableitem;
