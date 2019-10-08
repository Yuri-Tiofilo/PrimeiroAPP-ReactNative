import React from 'react';
import {Text} from 'react-native';
import Standard from '../style/standard';

export const Inverter = props => {
    const inv = props.texto.split('').reverse('').join('')
    return <Text style={Standard.exercise}>{inv}</Text>
}

export const MegaSena = props => {
    const [min,max] = [1,60]; 
    const numeros = Array(props.numeros || 6).fill(0); 

    for(let i = 0; i < numeros.length;i++){
        let novo = 0;
        while(numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min + 1)) + min 
        }
        numeros[i] = novo;
    }
    numeros.sort((a,b) => a - b);//ordena os valores de ordem crescente
    return <Text style={Standard.exercise}>{numeros.join(', ')}</Text>
    //está função irá funcionar como um gerador de numeros aleatórios
    //ela recebe um const onde tiramos numero de dentro de um array [1,60] para [min,max]
    //temos uma segunda constante aonde ela recebe um array, que está sendo completado por 0
    //criamos um for para gerar os numeros
    //enquanto o numero for false/true ele irá gerar dentro da variavel novo os numeros
    //portanto o array de numeros na posição i irá receber a variavel novo
    //até gerar todos os indices ele irá ficar neste ciclo 
}