import React, {Component} from 'react'
import {View, Text , TextInput} from 'react-native'
import Standard from '../style/standard'
export const Entrada = props =>
    <View>
        <TextInput value ={props.texto}
        style={Standard.input}
        onChangeText={props.chamarQuandoMudar}
        
        />
    </View>
export default class TextoSincronizado extends Component{

    state = {
        texto: ''
    }
    alteraTexto = texto => {
        this.setState({texto})
    }
    render(){
        return (
            <View>
                <Text style={Standard.fonte40}> 
                    {this.setState.texto}
                </Text>
                <Entrada texto={this.state.texto} 
                    chamarQuandoMudar={this.alteraTexto} />
            </View>
        )
    }
}


