import React, { PureComponent } from 'react';
import { View, StyleSheet, Modal, TextInput, Text } from 'react-native';

import CustomContainer from '../CustomContainer';
import CustomButton from '../CustomButton';

class ModalForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      newItem: {}
    };
  }

  closeHandler = (isEditing) => {
    const { editedItem, editItem, addItem } = this.props;

    if (isEditing) {
      editItem(this.state.newItem, editedItem.id);
    } else {
      addItem(this.state.newItem);
    }
  }

  render() {
    const { isVisible, editedItem, toggleModalForm, itemHeaders } = this.props;
    const isEditing = !!Object.keys(editedItem).length;

    return (
      isVisible ?
      <View style={styles.container}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={isVisible}
          onRequestClose={() => {}}
        >
          <View style={styles.modalContainer}>
            <CustomContainer
              titleText={isEditing ? 'Редактирование' : 'Добавление'}
              titleContainerStyle={styles.sideContainer}
              contentContainerStyle={styles.contentContainer}
              bottomContainerStyle={styles.sideContainer}
              titleStyle={styles.titleText}
              containerStyle={styles.modalContent}
              bottomContent={
                <View style={styles.bottomButtonsContainer}>
                  <CustomButton
                    withoutFeedback={false}
                    buttonStyle={[styles.bottomButton, styles.finishButton]}
                    title={isEditing ? 'Сохранить' : 'Добавить'}
                    titleStyle={styles.buttonText}
                    onPress={this.closeHandler.bind(null, isEditing)}
                  />
                  <CustomButton
                    withoutFeedback={false}
                    buttonStyle={[styles.bottomButton, styles.closeButton]}
                    title={'Закрыть'}
                    titleStyle={styles.buttonText}
                    onPress={toggleModalForm.bind(null, {})}
                  />
                </View>
              }
            >
              {
                isEditing ?
                itemHeaders.map((property, index) => {
                  return (
                    property === "id" ?
                    null
                    :
                    <View key={index}>
                      <Text style={styles.editedProperty}>{property.toUpperCase()}</Text>
                      <TextInput
                        style={styles.input}
                        defaultValue={editedItem[property].toString()}
                        onChangeText={value => this.setState({ newItem: Object.assign(this.props.editedItem, { [property]: value }) })}
                      />
                    </View>
                  );
                })
                :
                itemHeaders.map((property, index) => {
                  return (
                    property === "id" ?
                    null
                    :
                    <TextInput
                      key={index}
                      style={styles.input}
                      placeholder={property}
                      onChangeText={value => this.setState({ newItem: Object.assign(this.state.newItem, { [property]: value })})}
                    />
                  );
                })
              }
            </CustomContainer>
          </View>
        </Modal>
      </View>
      :
      null
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
  titleText: {
    fontSize: 30,
    color: '#616161'
  },
  modalContent: {
    width: 600,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#bdc3c7'
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottomButton: {
    borderRadius: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 30,
    paddingRight: 30,
    marginLeft: 5,
    marginRight: 5
  },
  finishButton: {
    backgroundColor: '#4CAF50'
  },
  closeButton: {
    backgroundColor: '#f39c12'
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  editedProperty: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 25
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    padding: 15,
    margin: 10
  }
});

export default ModalForm;