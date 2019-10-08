import React from 'react';
import {View, Text} from 'react-native';
import standard from '../style/standard';

function Pair_or_odd(numero){
    const valor = numero % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={standard.exercise}>{valor}</Text>
}
export default props =>
  <View>
      {Pair_or_odd(props.numero)}
    
  </View>

