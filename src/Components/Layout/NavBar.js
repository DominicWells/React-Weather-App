import React from 'react'
import styled from 'styled-components'

const NavBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid red;
    padding: 1.05em;
`;

const Link = styled.a`
    color: black;
    margin: 0 30px;
`;

const NavBar = () => {
    return (
        <NavBarWrapper>
            <Link>REACT WEATHER APP</Link>
            <Link>Link 1</Link>
            <Link>Link 2</Link>
        </NavBarWrapper>
    )
}

export default NavBar