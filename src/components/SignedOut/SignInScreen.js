import React, { PureComponent } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { loginAsync, getUserAsync } from '../../actions/ActionCreators';

import CustomContainer from '../CustomContainer';
import CustomButton from '../CustomButton';

import logHOC from '../../hoc/logHOC';

class SignInScreen extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  enterHandler = () => {
    let { username, password } = this.state;

    username = username.trim();
    password = password.trim();

    if (username && password) {
      this.props.login(username, password)
        .then(() => {
          this.props.navigation.navigate('SignedIn');
        })
        .catch(error => console.log(error));
    }
  }

  componentWillMount() {
    this.props.getUser()
      .then(user => {
        if (user.username && user.token && user.role) {
          this.props.navigation.navigate('SignedIn');
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomContainer
          titleText='Авторизация'
          titleContainerStyle={styles.sideContainer}
          contentContainerStyle={styles.contentContainer}
          bottomContainerStyle={styles.sideContainer}
          titleStyle={styles.titleText}
          bottomContent={
            <CustomButton
              withoutFeedback={false}
              buttonStyle={styles.button}
              title='Войти'
              titleStyle={styles.buttonTitle}
              onPress={this.enterHandler}
            />
          }
          >
          <TextInput
            style={styles.input}
            value={this.state.username}
            placeholder='Логин'
            ref={input => this.usernameInput = input}
            onChangeText={username => this.setState({ username })}
          />
          <TextInput
            style={styles.input}
            value={this.state.password}
            placeholder='Пароль'
            secureTextEntry={true}
            ref={input => this.passwordInput = input}
            onChangeText={password => this.setState({ password })}
          />
        </CustomContainer>
        <CustomButton
          withoutFeedback={false}
          buttonStyle={styles.bottomButton}
          title='Регистрация'
          titleStyle={styles.bottomButtonText}
          onPress={() => this.props.navigation.navigate('SignUp')}
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
    login: (username, password) => dispatch(loginAsync(username, password)),
    getUser: () => dispatch(getUserAsync())
  })
)(SignInScreen));