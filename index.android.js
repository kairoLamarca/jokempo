import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class jokempo extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '' }
  }

  jokenpo(escolhaUsuario) {
    // alert(escolhaUsuario);
    this.setState({ escolhaUsuario: escolhaUsuario });
  }

  render() {
    return (
      <View>
        <Text>Escolha do computador</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text>
        {/* deixa a função jokempo encapsulada para que ela só seja executado quando clicar */}
        <Button title="pedra" onPress={() => { this.jokenpo('pedra') }} />
        <Button title="papel" onPress={() => { this.jokenpo('papel') }} />
        <Button title="tesoura" onPress={() => { this.jokenpo('tesoura') }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('jokempo', () => jokempo);