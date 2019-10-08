import React from 'react';
import {View, StyleSheet} from 'react-native';

import Simples from './componentes/simples';
import Pair_Or_odd from './componentes/pair_Or_odd';
import {Inverter , MegaSena} from './componentes/multi'; // foi importado sem um padrão por isso o uso de {}
//Utiliza virgula quando temos mais de um
//Não utiliza chaves quando exportamos por padrão, ou seja quando utlilizamos default la no componente
//quando temos dois tipos de componente é necessario apenas colocar <nomecomponente>,{<nomeComponente2>}
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples text=" Flexível" />
        <Pair_Or_odd numero={6} />
        <Inverter texto='Arara'/>
        <MegaSena numero={6}/>
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
