import React from 'react';
import {View, Text} from 'react-native';
import Standard from '../style/standard';
import standard from '../style/standard';

function Pair_or_odd(){
    if(numero % 2 == 0){
        return <Text style={standard.exercise}> Par </Text>

    }else{
        return <Text style={standard.exercise}> Impar</Text>
    }
}
export default props =>
  <View>
    {
        props.numero % 2 == 0
        ? <Text style={Standard.exercise}> Par</Text>
        : <Text style={Standard.exercise}> Impar NGFHGF</Text>
    }
  </View>
