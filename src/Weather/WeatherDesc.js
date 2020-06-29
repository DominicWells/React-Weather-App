import React from 'react'
import styled from 'styled-components'

const LocationHeader = styled.h1`
    font-size: 12px;
    margin: 5px 0;
`;

const WeatherDesc = ({ weather, location }) => {
    return (
        <React.Fragment>
            <LocationHeader>{location}</LocationHeader>
            <span><b>{weather[0].main}</b></span>
            <span>({weather[0].description})</span>
        </React.Fragment>
        
    )
}

export default WeatherDesc