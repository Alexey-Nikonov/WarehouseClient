import React from 'react';
import { View, StyleSheet } from 'react-native';

import TableItem from './TableItem';
import CustomButton from '../CustomButton';

const TableRow = ({ data, toggleModalForm }) => (
  <View style={styles.container}>
    {
      Object.values(data).map((item, index) => (
        <TableItem key={index}>{item}</TableItem>
      ))
    }
    <CustomButton
      withoutFeedback={true}
      buttonStyle={styles.button}
      title='Изменить'
      titleStyle={styles.buttonTitle}
      onPress={toggleModalForm.bind(null, data)}
    />
    <CustomButton
      withoutFeedback={true}
      buttonStyle={styles.button}
      title='Удалить'
      titleStyle={styles.buttonTitle}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  button: {
    borderWidth: 1,
    borderColor: '#000'
  },
  buttonTitle: {

  }
});

export default TableRow;