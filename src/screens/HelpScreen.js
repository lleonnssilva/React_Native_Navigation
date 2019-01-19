import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class HelpScreeen extends Component {
  render () {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title='Abrir'
        />
        <Text>Página Help</Text>
      </View>
    )
  }
}
