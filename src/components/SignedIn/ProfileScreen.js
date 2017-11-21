import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { removeUserAsync } from '../../actions/ActionCreators';

import CustomContainer from '../CustomContainer';
import CustomButton from '../CustomButton';

import logHOC from '../../hoc/logHOC';

const ProfileScreen = ({ navigation, removeUser, user }) => {
  const signOut = () => {
    removeUser()
      .then(() => {
        navigation.navigate('SignedOut');
      });
  }

  return (
    <View style={styles.container}>
      <CustomContainer
        containerStyle={styles.customContainer}
        titleContainerStyle={styles.sideContainer}
        contentContainerStyle={styles.contentContainer}
        bottomContainerStyle={styles.sideContainer}
        titleText='Профиль'
        titleStyle={styles.titleText}
        bottomContent={
          <CustomButton
            withoutFeedback={false}
            buttonStyle={styles.button}
            title='Выход'
            titleStyle={styles.buttonTitle}
            onPress={signOut}
          />
        }
      >
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.infoTextBold}>Username: </Text>{user.username}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoTextBold}>Role: </Text>{user.username}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoTextBold}>Token: </Text>{user.token}
        </Text>
      </View>
      </CustomContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  customContainer: {
    width: 600
  },
  titleText: {
    fontSize: 30,
    color: '#616161'
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
  button: {
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 30,
    paddingRight: 30
  },
  buttonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  infoContainer: {
    marginLeft: 15,
    marginRight: 15
  },
  infoText: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5
  },
  infoTextBold: {
    fontWeight: 'bold'
  }
});

export default logHOC(connect(
  state => ({
    user: state.data.user
  }),
  dispatch => ({
    removeUser: () => dispatch(removeUserAsync())
  })
)(ProfileScreen));