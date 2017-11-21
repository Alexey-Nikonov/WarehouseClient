import React from 'react';
import { View, StyleSheet } from 'react-native';

import TableItem from './TableItem';
import CustomButton from '../CustomButton';

const TableHeader = ({ itemHeaders, toggleModalForm }) => (
  <View style={styles.container}>
    {
      itemHeaders.map((item, index) => (
        <TableItem key={index}>{item}</TableItem>
      ))
    }
    <CustomButton
      withoutFeedback={false}
      buttonStyle={styles.button}
      title='Добавить'
      titleStyle={styles.buttonTitle}
      onPress={() => toggleModalForm()}
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

export default TableHeader;