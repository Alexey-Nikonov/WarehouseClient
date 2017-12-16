import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CustomButton from '../CustomButton';
import TableContainer from './TableContainer';

import {
  getTablesAsync,
  getTableDataAsync,
  setCurrentTable,
  saveTableDataAsync,
  editTableDataAsync,
  deleteTableDataAsync,
  getTheMostValuableCustomerAsync,
  getFiveTheMostPopularGoodsAsync,
  getThreeTheMostValuableProvidersAsync
} from '../../actions/ActionCreators';

import { connect } from 'react-redux';

class InfoScreen extends PureComponent {
  componentWillMount() {
    const {
      getTables,
      getTheMostValuableCustomer,
      getFiveTheMostPopularGoods,
      getThreeTheMostValuableProviders,
      user
    } = this.props;

    getTables(user.token)
      .then((response) => {
        this.selectTableHandler(response[0].id);
      });

    getTheMostValuableCustomer(user.token);

    getFiveTheMostPopularGoods(user.token);

    getThreeTheMostValuableProviders(user.token);
  }

  selectTableHandler = (tableId) => {
    const { tablesInfo, setCurrentTable, getTableData, user } = this.props;
    const currentTable = tablesInfo.find(item => item.id === tableId);

    setCurrentTable(currentTable);
    getTableData(user.token, currentTable.route);
  }

  render() {
    const {
      tablesInfo,
      currentTable,
      tableData,
      user,
      saveTableData,
      editTableData,
      getTableData,
      deleteTableData,
      isLoading,
      isTableLoading,
      valuableCustomer,
      popularGoods,
      valuableProviders
    } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentContainerHeader}>
            <Text style={styles.contentContainerHeaderText}>{`Username: ${user.username}`}</Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.tablesContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
            {
              tablesInfo.length === 0 ?
              null
              :
              tablesInfo.map((tableInfo, index) => (
                <CustomButton
                  key={index}
                  withoutFeedback={false}
                  buttonStyle={styles.tablesContainerButton}
                  title={tableInfo.name}
                  titleStyle={styles.tablesContainerTitle}
                  onPress={this.selectTableHandler.bind(null, tableInfo.id)}
                />
              ))
            }
          </ScrollView>

          <TableContainer
            titleText='Самый ценный покупатель'
            tableData={[valuableCustomer]}
            isLoading={isLoading}
            withoutButtons
            user={user}
            currentTable={currentTable}
            saveTableData={saveTableData}
            editTableData={editTableData}
            getTableData={getTableData}
            deleteTableData={deleteTableData}
          />

          <View style={styles.tableDescriptionContainer}>
            <Text style={styles.tableDescriptionText}>
              {currentTable.hasOwnProperty('description') ? currentTable.description : 'Не известно'}
            </Text>
          </View>

          <TableContainer
            titleText={currentTable.hasOwnProperty('name') ? currentTable.name : 'Не известно'}
            tableData={tableData}
            isLoading={isTableLoading}
            user={user}
            currentTable={currentTable}
            saveTableData={saveTableData}
            editTableData={editTableData}
            getTableData={getTableData}
            deleteTableData={deleteTableData}
          />

          <TableContainer
            titleText='5 самых популярных товаров'
            tableData={popularGoods}
            isLoading={isLoading}
            withoutButtons
            user={user}
            currentTable={currentTable}
            saveTableData={saveTableData}
            editTableData={editTableData}
            getTableData={getTableData}
            deleteTableData={deleteTableData}
          />

          <TableContainer
            titleText='Три самых ценных поставщика'
            tableData={valuableProviders}
            isLoading={isLoading}
            withoutButtons
            user={user}
            currentTable={currentTable}
            saveTableData={saveTableData}
            editTableData={editTableData}
            getTableData={getTableData}
            deleteTableData={deleteTableData}
          />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  contentContainer: {
    padding: 10,
    backgroundColor: 'white'
  },
  contentContainerHeader: {
    paddingTop: 20,
    paddingBottom: 20
  },
  contentContainerHeaderText: {
    fontSize: 25
  },
  tableDescriptionContainer: {
    justifyContent: 'center'
  },
  tableDescriptionText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  tablesContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  tablesContainerButton: {
    backgroundColor: '#616161',
    borderRadius: 5,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 22,
    paddingRight: 22,
    marginRight: 15
  },
  tablesContainerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  }
});

export default connect(
  state => ({
    user: state.data.user,
    tablesInfo: state.data.tablesInfo,
    currentTable: state.data.currentTable,
    tableData: state.data.tableData,
    isLoading: state.data.isLoading,
    isTableLoading: state.data.isTableLoading,
    valuableCustomer: state.data.valuableCustomer,
    popularGoods: state.data.popularGoods,
    valuableProviders: state.data.valuableProviders
  }),
  dispatch => ({
    getTables: (token) => dispatch(getTablesAsync(token)),
    getTableData: (token, route) => dispatch(getTableDataAsync(token, route)),
    setCurrentTable: (tableInfo) => { dispatch(setCurrentTable(tableInfo)); },
    saveTableData: (token, route, data) => dispatch(saveTableDataAsync(token, route, data)),
    editTableData: (token, route, data, id) => dispatch(editTableDataAsync(token, route, data, id)),
    deleteTableData: (token, route, id) => dispatch(deleteTableDataAsync(token, route, id)),
    getTheMostValuableCustomer: (token) => dispatch(getTheMostValuableCustomerAsync(token)),
    getFiveTheMostPopularGoods: (token) => dispatch(getFiveTheMostPopularGoodsAsync(token)),
    getThreeTheMostValuableProviders: (token) => dispatch(getThreeTheMostValuableProvidersAsync(token))
  })
)(InfoScreen);