import React from 'react';
import {View, StyleSheet} from 'react-native';

import Simples from './componentes/simples';
import Pair_Or_odd from './componentes/pair_Or_odd';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples text=" Flexível" />
        <Pair_Or_odd numero={33} />
      </View> //referencia a importação de Simples que é um componente feito fora do arquivo app.js
    ); //<Simples /> não é uma tag é uma conversão para os componentes nativos
  }
}
//componente sem simplificação

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20,
  }
});
