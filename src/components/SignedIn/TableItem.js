import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableItem = ({ children, textStyle }) => (
  <View style={styles.container}>
    <Text style={textStyle}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 125,
    borderWidth: 1,
    borderColor: '#616161',
    padding: 10
  }
});

export default TableItem;