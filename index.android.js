import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MeuComponente extends Component{
  render(){
    return (
      <View>
        <Text>{this.props.propriedade1}</Text>
        <Text>{this.props.xyz}</Text>
        <Text>{this.props.p}</Text>
      </View>      
    )
  }
}

class jokempo extends Component{
  render(){
    return(
      <MeuComponente propriedade1='Banana' xyz='Abacaxi' p='Uva'></MeuComponente>
    );
  }
}

AppRegistry.registerComponent('jokempo', () => jokempo);
