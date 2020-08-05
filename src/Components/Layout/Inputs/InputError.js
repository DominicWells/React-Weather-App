import React from 'react'
import styled from 'styled-components'

const StyledInputError = styled.div`
    background-color: rgb(202, 60, 60);
    padding: 5px;
    border-radius: 4px;
    color: #fff;
`;

const InputError = props => {
    return (
        <StyledInputError>{props.children}</StyledInputError>
    )
}

export default InputError