import React, { PureComponent } from 'react';
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native';

import CustomContainer from '../CustomContainer';
import CustomButton from '../CustomButton';
import Table from './Table';

import {
  getTablesAsync,
  getTableDataAsync,
  setCurrentTable,
  saveTableDataAsync,
  editTableDataAsync
} from '../../actions/ActionCreators';

import { connect } from 'react-redux';

class InfoScreen extends PureComponent {
  componentWillMount() {
    const { getTables, setCurrentTable, getTableData, user } = this.props;

    getTables(user.token)
      .then((response) => {
        const currentTable = response[0];

        setCurrentTable(currentTable);

        getTableData(user.token, currentTable.route);
      });
  }

  render() {
    const { tablesInfo, currentTable, tableData, user, saveTableData, editTableData } = this.props;

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
                  // onPress={this.registerHandler}
                />
              ))
            }
          </ScrollView>

          <CustomContainer
            containerStyle={styles.tableContainer}
            titleContainerStyle={styles.tableContainerTitle}
            contentContainerStyle={styles.tableContainerContent}
            titleText={currentTable.hasOwnProperty('name') ? currentTable.name : 'Не известно'}
            titleStyle={styles.tableContainerTitleText}
          >
            <View style={styles.tableDescriptionContainer}>
              <Text style={styles.tableDescriptionText}>
                {currentTable.hasOwnProperty('description') ? currentTable.description : 'Не известно'}
              </Text>
            </View>

          {
            tableData.length === 0 ?
            null
            :
            <Table
              user={user}
              currentTable={currentTable}
              tableData={tableData}
              saveTableData={saveTableData}
              editTableData={editTableData}
            />
          }



            <Text>12034freferf3{'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}</Text>
          </CustomContainer>

          <Text>12034freferf3{'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}</Text>
          <Text>12034freferf3</Text>
          <Text>12034freferf3</Text>
          <Text>12034freferf3</Text>
          <Text>12034freferf3</Text>
          <Text>12034freferf3</Text>
          <Text>12034freferf3</Text>
          <Text>12034freferf3</Text>

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
  tableContainer: {
    width: null
  },
  tableContainerTitle: {
    padding: 10
  },
  tableContainerContent: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10
  },
  tableContainerTitleText: {
    fontSize: 25,
    color: '#616161'
  },
  tableDescriptionContainer: {

  },
  tableDescriptionText: {

  },
  tablesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    // paddingRight: 7
  },
  tablesContainerButton: {
    // backgroundColor: '#4CAF50',
    backgroundColor: '#616161',
    borderRadius: 5,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 22,
    paddingRight: 22,
    // marginLeft: 7,
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
    tableData: state.data.tableData
  }),
  dispatch => ({
    getTables: (token) => dispatch(getTablesAsync(token)),
    getTableData: (token, route) => dispatch(getTableDataAsync(token, route)),
    setCurrentTable: (tableInfo) => { dispatch(setCurrentTable(tableInfo)); },
    saveTableData: (token, route, data) => dispatch(saveTableDataAsync(token, route, data)),
    editTableData: (token, route, data, id) => dispatch(editTableDataAsync(token, route, data, id))
  })
)(InfoScreen);