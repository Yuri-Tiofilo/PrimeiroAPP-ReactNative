import React from 'react';

export default props => {
    if(props.numero){
        return props.children
    }else{
        return false
    }
}