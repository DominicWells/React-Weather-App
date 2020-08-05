import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    border-radius: 25px;
    background-color: #fff;
    padding: 15px;
    margin: 5px;
    outline: none;
`;

const TextInput = props => {
    return (
        <StyledInput 
            type="text" 
            placeholder={props.placeholder} 
            value={props.value} 
            onChange={props.onChange} 
        />
    )
}

export default TextInput