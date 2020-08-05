import React from 'react'
import styled from 'styled-components'

const H3Styled = styled.h3`
    color: #61dafb;
    margin: 5px 0;
`;

const H3 = props => {
    return (
        <H3Styled>{props.children}</H3Styled>
    )
}

export default H3