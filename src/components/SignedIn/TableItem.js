import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableItem = ({ children }) => (
  <View style={styles.container}>
    <Text>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 115,
    borderWidth: 1,
    borderColor: '#000'
  }
});

export default TableItem;