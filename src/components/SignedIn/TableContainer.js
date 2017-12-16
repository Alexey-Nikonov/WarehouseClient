import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CustomContainer from '../CustomContainer';
import Table from './Table';

const TableContainer = ({ titleText, tableData, withoutButtons, isLoading, user, currentTable, saveTableData, editTableData, getTableData, deleteTableData }) => (
  <CustomContainer
    containerStyle={styles.tableContainer}
    titleContainerStyle={styles.tableContainerTitle}
    contentContainerStyle={styles.tableContainerContent}
    titleText={titleText}
    titleStyle={styles.tableContainerTitleText}
    >
    {
      tableData.length === 0 ?
      null
      :
      isLoading ?
      <Text style={styles.isLoadingText}>Обновление...</Text>
      :
      <Table
        withoutButtons={withoutButtons}
        user={user}
        currentTable={currentTable}
        tableData={tableData}
        saveTableData={saveTableData}
        editTableData={editTableData}
        getTableData={getTableData}
        deleteTableData={deleteTableData}
      />
    }
  </CustomContainer>
);

const styles = StyleSheet.create({
  tableContainer: {
    width: null,
    marginBottom: 20
  },
  tableContainerTitle: {
    padding: 10
  },
  tableContainerContent: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20
  },
  tableContainerTitleText: {
    fontSize: 25,
    color: '#616161'
  },
  isLoadingText: {
    padding: 10,
    textAlign: 'center'
  }
});

export default TableContainer;