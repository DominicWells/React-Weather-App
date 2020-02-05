import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    // height: 10%;
    background-color: grey;
`

const Footer = () => {
    return (
        <FooterWrapper>
            This is the footer.
        </FooterWrapper>
    )
}

export default Footer