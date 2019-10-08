import React from 'react';
import {Text} from 'react-native';
import Standard from '../style/standard';
//modelo de função equinoscript
//export default function(props) {
//  return <Text>{props.text}</Text>;
//}

//Função arrow function
export default props =>
  <Text style={[Standard.exercise]}> Arrow 1:{props.text} </Text>

//quando a duas informações parecidas
//mesma coisa que a função acima
//export default props =>{
//  return[
//    <Text>Arrow 1:{props.text} </Text>,
//    <Text>Arrow 2:{props.text} </Text>,
//  ];
//}
