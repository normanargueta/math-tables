import React from 'react';
import { View } from 'react-native';

import Styles from '../styles/Styles';
import TableGrid from '../components/TableGrid';

const TableSelection = () => {
  return (
    <View style={ Styles.screenView }>
      <TableGrid />
    </View>
  );
};

export default TableSelection;
