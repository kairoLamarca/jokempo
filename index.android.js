import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class MeuComponente extends Component {
  render() {
    return (
      <View>
        {/* <Text>{this.props.propriedade1}</Text>
        <Text>{this.props.xyz}</Text>
        <Text>{this.props.p}</Text> */}
        <Text>{this.props.teste}</Text>
      </View>
    )
  }
}

class jokempo extends Component {

  constructor(props) {
    super(props);//passa as propriedades para o Component

    this.state = { texto: 'Texto teste 2' };
  }

  alteraTexto() {
    this.setState({ texto: 'Outra coisa' });//fun;'ao herdada do Component
  }

  render() {
    return (
      <View>
        {/* <MeuComponente propriedade1='Banana' xyz='Abacaxi' p='Uva'></MeuComponente> */}
        <MeuComponente teste={this.state.texto}></MeuComponente>
        <Button
          title='Botão'
          onPress={() => { this.alteraTexto() }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('jokempo', () => jokempo);
