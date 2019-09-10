import React from 'react'
import styled from 'styled-components'

const WeatherDescWrapper = styled.div`
    padding: 10px;
`;

const WeatherDesc = ({ weather, location }) => {
    return (
        <WeatherDescWrapper>
            <h1>{location}</h1>
            <span><b>{weather[0].main}</b></span>
            <span>({weather[0].description})</span>
        </WeatherDescWrapper>
    )
}

export default WeatherDesc