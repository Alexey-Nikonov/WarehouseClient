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
    const { user, currentTable, saveTableData } = this.props;

    saveTableData(user.token, currentTable.route, data);
    this.toggleModalForm();
  }

  editItemHandler = (data, id) => {
    const { user, currentTable, editTableData } = this.props;

    editTableData(user.token, currentTable.route, data, id);

    this.toggleModalForm({});
  }

  toggleModalForm = (item) => {
    console.log('After edit/add row', item)
    if (item) {
      this.setState({ editedItem: item });
    }

    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    const { tableData, user } = this.props;
    const itemHeaders = Object.keys(tableData[0]);

    return (
      <View style={styles.container}>
        <TableHeader itemHeaders={itemHeaders} toggleModalForm={this.toggleModalForm} />
        {
          tableData.map((item, index) => (
            <TableRow key={index} data={item} toggleModalForm={this.toggleModalForm} />
          ))
        }
        <ModalForm
          isVisible={this.state.isModalVisible}
          addItem={this.addItemHandler}
          editItem={this.editItemHandler}
          editedItem={this.state.editedItem}
          itemHeaders={itemHeaders}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000'
  }
});

export default Table;