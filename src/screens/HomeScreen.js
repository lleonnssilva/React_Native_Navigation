import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class HomeScreen extends Component {
  render () {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title='Abrir'
        />
        <Text>Página Home</Text>
      </View>
    )
  }
}
