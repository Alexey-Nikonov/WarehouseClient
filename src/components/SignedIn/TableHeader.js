import React from 'react';
import { View, StyleSheet } from 'react-native';

import TableItem from './TableItem';
import CustomButton from '../CustomButton';

const TableHeader = ({ itemHeaders, toggleModalForm, withoutButtons }) => (
  <View style={styles.container}>
    {
      itemHeaders.map((item, index) => (
        item === 'id' ?
        null
        :
        <TableItem key={index} textStyle={styles.headerItem}>{item.toUpperCase()}</TableItem>
      ))
    }
    {
      withoutButtons ?
      null
      :
      <CustomButton
        withoutFeedback={false}
        buttonStyle={styles.button}
        title='Добавить'
        titleStyle={styles.buttonTitle}
        onPress={() => toggleModalForm()}
      />
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  button: {
    justifyContent: 'center',
    width: 200,
    borderWidth: 1,
    borderColor: '#616161',
    backgroundColor: '#dcffdb'
  },
  buttonTitle: {
    textAlign: 'center'
  },
  headerItem: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default TableHeader;