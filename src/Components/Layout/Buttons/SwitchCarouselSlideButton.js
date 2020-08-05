import React from 'react'
import styled from 'styled-components'
import { ButtonBack, ButtonNext } from 'pure-react-carousel'

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonBackStyled = styled(ButtonBack)`
    background-color: #823aa0;
    color: #fff;
    margin: 5px;
    font-size: 16px;
    padding: 20px 50px;
    border-radius: 5px;
`;

const ButtonNextStyled = styled(ButtonNext)`
    background-color: #823aa0;
    color: #fff;
    margin: 5px;
    font-size: 16px;
    padding: 20px 50px;
    border-radius: 5px;
`;

const SwitchCarouselSlideButton = () => {
    return (
        <ButtonWrapper>
            <ButtonBackStyled>Back</ButtonBackStyled>
            <ButtonNextStyled>Next</ButtonNextStyled>
        </ButtonWrapper>
    )
}

export default SwitchCarouselSlideButton