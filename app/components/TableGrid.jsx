import React from 'react';
import { View } from 'react-native';

import TableItem from './TableItem';

const tables = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const TableGrid = () => {
  const styles = {
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }
  };
  return (
    <View style={styles.container}>
      { tables.map(table => {
          return (
            <TableItem key={ table } name={ table } />
          )
        })
      }
    </View>
  );
};

export default TableGrid;
