import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
    {id: 1,nome: 'João', nota: 7.9},
    {id: 2,nome: 'Ana', nota: 10},
    {id: 3,nome: 'Pedro', nota: 8},
    {id: 4,nome: 'Caludia', nota: 5.6},
    {id: 5,nome: 'João Vitor', nota: 9.9},
    {id: 6,nome: 'Lucas', nota: 9.9},
    {id: 7,nome: 'Luis', nota: 9.9},
    {id: 8,nome: 'Vitor', nota: 9.9},
    {id: 9,nome: 'José Vitor', nota: 9.9},
    {id: 10,nome: 'Pedro Vitor', nota: 9.9},
    {id: 11,nome: 'João', nota: 7.9},
    {id: 12,nome: 'Ana', nota: 10},
    {id: 13,nome: 'Pedro', nota: 8},
    {id: 14,nome: 'Caludia', nota: 5.6},
    {id: 15,nome: 'João Vitor', nota: 9.9},
    {id: 16,nome: 'Lucas', nota: 9.9},
    {id: 17,nome: 'Luis', nota: 9.9},
    {id: 18,nome: 'Vitor', nota: 9.9},
    {id: 19,nome: 'José Vitor', nota: 9.9},
    {id: 20,nome: 'Pedro Vitor', nota: 9.9}
]
const itemEstilo = {
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: '#eeeeee',
    borderWidth: 0.5,
    //flex
    alignItems: 'center',
    //justifyContent: 'center'
    flexDirection: 'row',
    justifyContent: 'space-between',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text> Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}> Nota: {props.nota}</Text>
    </View>
export default props => {

    return (
        <ScrollView>
        
         <FlatList 
            data={alunos}
            renderItem={({item})=>(<Aluno nome={item.nome}nota={item.nota}/>)}
            keyExtractor={(item) => item.id.toString()} 
        />
        </ScrollView>
    )
}