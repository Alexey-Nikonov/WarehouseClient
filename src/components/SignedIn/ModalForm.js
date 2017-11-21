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

  // componentWillReceiveProps(nextProps) {
  //   console.log('len', Object.keys(nextProps.editedItem).length)

  //   this.setState({
  //     isEditing: !!Object.keys(nextProps.editedItem).length,
  //   });
  // }

  closeHandler = (isEditing) => {
    const { editItem, addItem } = this.props;

    if (isEditing) {
      // console.log(this.state.newItem);
      editItem(this.state.newItem, editItem.id);
    } else {
      // console.log(this.state.newItem);
      addItem(this.state.newItem);
    }
  }

  render() {
    const { isVisible, editedItem, itemHeaders } = this.props;
    // console.log('IS EDITING', this.state.isEditing)
    console.log('editedItem', editedItem)

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
                <CustomButton
                  withoutFeedback={false}
                  buttonStyle={styles.closeButton}
                  title={isEditing ? 'Сохранить' : 'Добавить'}
                  titleStyle={styles.buttonText}
                  onPress={this.closeHandler.bind(null, isEditing)}
                />
              }
            >
              {
                isEditing ?
                itemHeaders.map((property, index) => {
                  return (
                    <View>
                      <Text>{property}</Text>
                      <TextInput
                        key={index}
                        style={styles.input}
                        defaultValue={editedItem[property]}
                        onChangeText={value => console.log(value)}
                      />
                    </View>
                  );
                })
                :
                itemHeaders.map((property, index) => {
                  return (
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
  closeButton: {
    backgroundColor: '#e74c3c',
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
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    padding: 15,
    margin: 10
  }
});


export default ModalForm;