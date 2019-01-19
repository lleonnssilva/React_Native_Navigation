import React, { Component } from 'react'

import { View, Text, Button } from 'react-native'

// import styles from './styles';

export default class SettingsScreen extends Component {
  render () {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title='Abrir'
        />
        <Text>Página Settings</Text>
      </View>
    )
  }
}
