import React, { Fragment } from 'react'
import styled from 'styled-components'

import H3 from '../Titles/H3'

const StyledToggleButton = styled.button`
    border-radius: 5px;
    padding: 2px 4px;
    margin: 5px;
    background-color: #fcad26;
    border: none;
    color: #fff;
    font-size: 20px;
    outline: none;

    &:hover {
        cursor: pointer;
    }
`;

const ToggleButton = props => {
    return (
        <Fragment>
            <H3>Using {props.unit} Units</H3>
            <StyledToggleButton onClick={props.onClick}>{props.children}</StyledToggleButton>
        </Fragment>
    )
}

export default ToggleButton