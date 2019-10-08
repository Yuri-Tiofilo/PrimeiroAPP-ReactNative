import React , {Component} from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import Standard from '../style/standard';

export default class Evento extends Component{
    state ={
        texto: null
    }
    alteraTexto = texto => {
        this.setState({ texto });
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style= {styles.label}>Login</Text>
                <TextInput value={this.state.texto} style={Standard.input} onChangeText={this.alteraTexto} placeholder={'Nome'}/>
                <Button style={styles.button} title={'ENTRAR'}  /> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      flex: 1,
      padding: 20,
      marginBottom: 35,
    },
    label:{
        marginBottom:10
    },
    button:{
        height: 48,
        padding: 20,
    }
  });
  