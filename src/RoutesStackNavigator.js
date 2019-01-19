import { createStackNavigator, createAppContainer } from 'react-navigation'
import React, { Component } from 'react'

import AboutScreen from './screens/AboutScreen'
import HomeScreen from './screens/HomeScreen'

const Routes = createStackNavigator(
  {
    AboutScreen,
    HomeScreen
  },
  { initialRouteName: 'HomeScreen' }
)

export default createAppContainer(Routes)
