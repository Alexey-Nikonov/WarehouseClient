import React from 'react';
import { View, StyleSheet } from 'react-native';

import TableItem from './TableItem';
import CustomButton from '../CustomButton';

const TableRow = ({ data, toggleModalForm, deleteItemHandler, withoutButtons }) => (
  <View style={styles.container}>
    {
      Object.keys(data).map((key, index) => (
        key === 'id' ?
        null
        :
        <TableItem key={index} style={styles.rowItem}>{data[key]}</TableItem>
      ))
    }
    {
      withoutButtons ?
      null
      :
      <View style={styles.container}>
        <CustomButton
          withoutFeedback={false}
          buttonStyle={[styles.button, styles.editingButton]}
          title='Изменить'
          titleStyle={styles.buttonTitle}
          onPress={toggleModalForm.bind(null, data)}
        />
        <CustomButton
          withoutFeedback={false}
          buttonStyle={[styles.button, styles.removeButton]}
          title='Удалить'
          titleStyle={styles.buttonTitle}
          onPress={deleteItemHandler.bind(null, data.id)}
        />
      </View>

    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  rowItem: {
    flex: 1
  },
  button: {
    width: 100,
    borderWidth: 1,
    borderColor: '#616161',
    justifyContent: 'center'
  },
  editingButton: {
    backgroundColor: '#ffe9c6'
  },
  removeButton: {
    backgroundColor: '#ffd3ce'
  },
  buttonTitle: {
    textAlign: 'center'
  }
});

export default TableRow;