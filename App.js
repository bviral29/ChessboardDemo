import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './app/src/Home';

const AppNavigator = createStackNavigator({

  //Screen Register
  Home: {
    screen: Home,
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none', //remove default header throughout app
});

export default createAppContainer(AppNavigator);
