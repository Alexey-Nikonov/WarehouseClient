import React, { PureComponent } from 'react';
import { View, Text, Modal, FlatList, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import CustomContainer from '../components/CustomContainer';
import CustomButton from '../components/CustomButton';

function logHOC(WrappedComponent) {
  class LogHOC extends PureComponent {
    constructor() {
      super();

      this.state = {
        isModalVisible: false
      };
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.logUtilsContainer}>
            {
              this.props.isLoading ?
              <Text style={styles.logLoadingText}>Загрузка...</Text>
              :
              null
            }
            <CustomButton
              withoutFeedback={false}
              buttonStyle={styles.logButton}
              title='Логи'
              titleStyle={styles.buttonText}
              onPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
            />
          </View>

          <WrappedComponent {...this.props} />

          <Modal
            animationType='fade'
            transparent={true}
            visible={this.state.isModalVisible}
            onRequestClose={() => {}}
          >
            <View style={styles.modalContainer}>
              <CustomContainer
                titleText='Логи'
                titleContainerStyle={styles.sideContainer}
                contentContainerStyle={styles.contentContainer}
                bottomContainerStyle={styles.sideContainer}
                titleStyle={styles.titleText}
                containerStyle={styles.modalContent}
                bottomContent={
                  <CustomButton
                    withoutFeedback={false}
                    buttonStyle={styles.closeButton}
                    title='Закрыть'
                    titleStyle={styles.buttonText}
                    onPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
                  />
                }
              >
                <FlatList
                  style={styles.logsContainer}
                  data={this.props.logs.map((value, key) => ({ key, value }))}
                  renderItem={log => <Text style={styles.log}>{log.item.value}</Text>}
                  keyExtractor={(log) => log.key}
                />
              </CustomContainer>
            </View>
          </Modal>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    logUtilsContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      position: 'absolute',
      top: 30,
      right: 30,
      zIndex: 1
    },
    logLoadingText: {
      fontSize: 17,
      marginRight: 10
    },
    logButton: {
      backgroundColor: '#f39c12',
      borderRadius: 10,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 30,
      paddingRight: 30
    },
    buttonText: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center'
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    sideContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    },
    contentContainer: {
      paddingTop: 25,
      paddingBottom: 25,
      backgroundColor: 'white',
      justifyContent: 'center'
    },
    modalContent: {
      width: 600,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#bdc3c7'
    },
    titleText: {
      fontSize: 30,
      color: '#616161'
    },
    logsContainer: {
      height: 600,
      paddingLeft: 10,
      paddingRight: 10
    },
    log: {
      fontSize: 17
    },
    closeButton: {
      backgroundColor: '#e74c3c',
      borderRadius: 10,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 30,
      paddingRight: 30
    }
  });

  return connect(
    state => ({
      logs: state.data.logs,
      isLoading: state.data.isLoading
    })
  )(LogHOC);
}

export default logHOC;