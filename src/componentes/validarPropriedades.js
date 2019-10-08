import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const ValidarPropriedades = props => 
    <Text style={{fontSize: 35}}>
        {props.label}
        {props.ano + 2000}
    </Text>

ValidarPropriedades.defaultProps = {
    label: 'Ano: '
}

ValidarPropriedades.propTypes = {
    Ano: PropTypes.number.isRequired  
}

export default ValidarPropriedades