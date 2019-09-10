import React from 'react'
import styled from 'styled-components'

const NavBarWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid red;
    padding: 1.05em;
`;

const NavBar = () => {
    return (
        <NavBarWrapper>
            <div>REACT WEATHER APP</div>
            <div>Link 1</div>
            <div>Link 2</div>
        </NavBarWrapper>
    )
}

export default NavBar