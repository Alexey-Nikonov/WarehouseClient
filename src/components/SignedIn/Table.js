import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import ModalForm from './ModalForm';

class Table extends PureComponent {
  constructor() {
    super();

    this.state = {
      isModalVisible: false,
      editedItem: {}
    };
  }

  addItemHandler = (data) => {
    const { user, currentTable, saveTableData, getTableData } = this.props;
    saveTableData(user.token, currentTable.route, data);
  }

  editItemHandler = (data, id) => {
    const { user, currentTable, editTableData } = this.props;
    editTableData(user.token, currentTable.route, data, id);
  }

  deleteItemHandler = (id) => {
    const { user, currentTable, deleteTableData } = this.props;
    deleteTableData(user.token, currentTable.route, id);
  }

  toggleModalForm = (item) => {
    if (item) {
      this.setState({ editedItem: item });
    }

    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    const { tableData, withoutButtons } = this.props;
    const itemHeaders = Object.keys(tableData[0]);

    return (
      <View style={styles.container}>
        <View style={styles.tableContainer}>
          <TableHeader
            itemHeaders={itemHeaders}
            toggleModalForm={this.toggleModalForm}
            withoutButtons={withoutButtons}
          />
          {
            tableData.map((item, index) => (
              <TableRow
              key={index}
              data={item}
              toggleModalForm={this.toggleModalForm}
              deleteItemHandler={this.deleteItemHandler}
              withoutButtons={withoutButtons}
              />
            ))
          }
          <ModalForm
            isVisible={this.state.isModalVisible}
            addItem={this.addItemHandler}
            editItem={this.editItemHandler}
            editedItem={this.state.editedItem}
            toggleModalForm={this.toggleModalForm}
            itemHeaders={itemHeaders}
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#616161'
  }
});

export default Table;