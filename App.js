import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './app/src/Home';
import HomeNew from './app/src/HomeNew';

const AppNavigator = createStackNavigator({

  //Screen Register
  Home: {
    screen: Home,
  },
  HomeNew: {
    screen: HomeNew,
  },
}, {
  initialRouteName: 'HomeNew',
  headerMode: 'none', //remove default header throughout app
});

export default createAppContainer(AppNavigator);
