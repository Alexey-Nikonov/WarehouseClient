import React from 'react';

import { StackNavigator, TabNavigator } from 'react-navigation';

import SignInScreen from './components/SignedOut/SignInScreen';
import SignUpScreen from './components/SignedOut/SignUpScreen';

import InfoScreen from './components/SignedIn/InfoScreen';
import ProfileScreen from './components/SignedIn/ProfileScreen';

import { FontAwesome } from '@expo/vector-icons';

const signedOutRoutes = {
  SignIn: {
    screen: SignInScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
};

const signedOutOptions = {
  headerMode: 'none',
  // transitionConfig: () => ({
  //   screenInterpolator: sceneProps => {
  //     const { layout, position, scene } = sceneProps;
  //     const { index } = scene;

  //     const translateX = position.interpolate({
  //       inputRange: [index - 1, index, index + 1],
  //       outputRange: [layout.initWidth, 0, 0]
  //     });

  //     const opacity = position.interpolate({
  //       inputRange: [index - 1, index, index + 1],
  //       outputRange: [0, 1, 1]
  //     });

  //     return { opacity, transform: [{ translateX }] }
  //   }
  // })
};

const SignedOutNavigator = StackNavigator(signedOutRoutes, signedOutOptions);

const signedInRoutes = {
  Info: {
    screen: InfoScreen,
    navigationOptions: {
      title: 'Информация',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="info-circle" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Профиль',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={30} color={tintColor} />
      )
    }
  }
};

const signedInOptions = {
  swipeEnabled: true,
  animationEnabled: true,
};

const SignedInNavigator = TabNavigator(signedInRoutes, signedInOptions);

const rootRoutes = {
  SignedOut: {
    screen: SignedOutNavigator,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  SignedIn: {
    screen: SignedInNavigator,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
};

const rootOptions = {
  headerMode: 'none',
  animationEnabled: false
};

export default RootNavigator = StackNavigator(rootRoutes, rootOptions);