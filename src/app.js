import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { Provider, connect } from 'react-redux';
import store from './store';

import { addNavigationHelpers } from 'react-navigation';
import RootNavigator from './router';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <RootNavigator navigation={addNavigationHelpers({
           dispatch: this.props.dispatch,
           state: this.props.nav
         })} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default class extends Component {
  render() {
    return (
      <Provider store={store} key={Date.now()}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});