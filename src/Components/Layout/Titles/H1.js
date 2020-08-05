import React from 'react'
import styled from 'styled-components'

const H1Styled = styled.h1`
    color: #61dafb;
`;

const H1 = props => {
    return (
        <H1Styled>{props.children}</H1Styled>
    )
}

export default H1