import React, { Component } from 'react'

import AboutScreen from './screens/AboutScreen'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import HelpScreen from './screens/HelpScreen'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

const DrawerNavigator = createDrawerNavigator(
  {
    Sobre: { screen: AboutScreen },
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    Help: { screen: HelpScreen }
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(DrawerNavigator)
