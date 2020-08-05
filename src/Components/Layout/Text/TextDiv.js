import React from 'react'
import styled from 'styled-components'

const StyledTextDiv = styled.div`
    color: #fff;
    font-size: 14px;
    font-family: "Lucida Console", Courier, monospace;
    text-align: center;
    margin: 5px;
`;

const TextDiv = props => {
    return (
        <StyledTextDiv>{props.children}</StyledTextDiv>
    )
}

export default TextDiv