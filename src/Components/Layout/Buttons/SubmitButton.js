import React from 'react'
import styled from 'styled-components'

const StyledSubmitButton = styled.button`
    border-radius: 5px;
    padding: 2px 4px;
    margin: 5px;
    background-color: #17aa56;
    box-shadow: 0 5px #119e4d;
    border: none;
    color: #fff;
    font-size: 20px;
    outline: none;

    &:hover {
        cursor: pointer;
    }
`;

const SubmitButton = props => {
    return (
        <StyledSubmitButton type="submit">{props.children}</StyledSubmitButton>
    )
}

export default SubmitButton