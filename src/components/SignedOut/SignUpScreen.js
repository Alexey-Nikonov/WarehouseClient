import React, { PureComponent } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { registerAsync } from '../../actions/ActionCreators';

import CustomContainer from '../CustomContainer';
import CustomButton from '../CustomButton';

import logHOC from '../../hoc/logHOC';

class SignUpScreen extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      confirmpassword: ''
    };
  }

  registerHandler = () => {
    let { username, password, confirmpassword } = this.state;

    username = username.trim();
    password = password.trim();
    confirmpassword = confirmpassword.trim();

    if (username && password && confirmpassword && password === confirmpassword) {
      this.props.register(username, password, confirmpassword)
        .then(() => { this.props.navigation.navigate('SignedIn'); });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomContainer
          titleText='Регистрация'
          titleContainerStyle={styles.sideContainer}
          contentContainerStyle={styles.contentContainer}
          bottomContainerStyle={styles.sideContainer}
          titleStyle={styles.titleText}
          bottomContent={
            <CustomButton
              withoutFeedback={false}
              buttonStyle={styles.button}
              title='Зарегистрироваться'
              titleStyle={styles.buttonTitle}
              onPress={this.registerHandler}
            />
          }
          >
          <TextInput
            style={styles.input}
            placeholder='Логин'
            onChangeText={username => this.setState({ username })}
          />
          <TextInput
            style={styles.input}
            placeholder='Пароль'
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
          <TextInput
            style={styles.input}
            placeholder='Подтвердите пароль'
            secureTextEntry={true}
            onChangeText={confirmpassword => this.setState({ confirmpassword })}
          />
        </CustomContainer>
        <CustomButton
          withoutFeedback={false}
          buttonStyle={styles.bottomButton}
          title='Вход'
          titleStyle={styles.bottomButtonText}
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    padding: 15,
    margin: 10
  },
  bottomButton: {
    padding: 10
  },
  bottomButtonText: {
    color: '#007AFF',
    fontSize: 19
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
    backgroundColor: '#4CAF50',
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
  }
});

export default logHOC(connect(
  null,
  dispatch => ({
    register: (username, password, confirmpassword) =>
      dispatch(registerAsync(username, password, confirmpassword))
  })
)(SignUpScreen));