import React from 'react';
import {createDrawerNavigator} from 'react-navigation';

import Simples from './componentes/simples';
import Contador from './componentes/contador';
import Pair_Or_odd from './componentes/pair_Or_odd';
import {Inverter , MegaSena} from './componentes/multi';
import Plataforma from './componentes/plataforma';
import ValidarPropriedades from './componentes/validarPropriedades';
import Evento from './componentes/evento';
import {Avo} from './componentes/Comunicacacao';
import TextoSincronizado  from './componentes/ComunicaçãoIndireta';
import ListaFlex from './componentes/ListaFlex';
import Flex from './componentes/flex';

export default createDrawerNavigator({
    Flex:{
        screen: Flex
    },
    ListaFlex:{
        screen: ListaFlex,
        navigationOptions: {title: 'Lista Flex'}
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: {title: 'Texto'}
    },
    Avo:{
        screen: () => <Avo nome='João' sobrenome='Silva' />,
    },
    Evento: {
        screen: Evento
    },
    ValidarPropriedades: {
        screen: () => <ValidarPropriedades ano={18} />,
        navigationOptions: {title: 'Validar Propriedades'}
    },
    Plataforma: {

        screen: Plataforma
    },
    Contador:{
        screen: () => <Contador numeroInicial={100} />
    },
    MegaSena:{
        screen: () => <MegaSena numeros = {6} />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto= 'Arara'/>,
    },
    Pair_Or_odd:{
        screen: () => <Pair_Or_odd numero={30}/>,
        navigationOptions: {title: 'Par ou impar'}
    },
    Simples: {
        screen: () => <Simples text='Flexível'/>
    }
},{drawerWidth: 300});