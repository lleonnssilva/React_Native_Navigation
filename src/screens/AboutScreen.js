import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class SobreScreeen extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title='Abrir'
        />
        <Text>Página Sobre</Text>
      </View>
    )
  }
}
