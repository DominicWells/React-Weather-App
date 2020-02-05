import React from 'react'
import styled from 'styled-components'

import MyMap from './Map/index'
import WeatherDesc from './WeatherDesc'
import WeatherDetailsTable from './WeatherDetailsTable'

const WeatherDetailsWrapper = styled.div`
    width: 75%;
    padding: 20px;
    background-color: #93b2c4;
    height: 80%;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
`;

const WeatherDetails = ({ data, toggleUnit }) => {

    if (Object.entries(data).length !== 0) {

       const icon = data.weather[0].icon
       const position = [data.coord.lat,data.coord.lon]

        return (
                <WeatherDetailsWrapper>
                    <img width={100} height={100} alt='weather-icon' src={`https://api.openweathermap.org/img/w/${icon}.png`} />
                    <WeatherDesc weather={data.weather} location={data.name} />
                    <MyMap position={position} />
                    <WeatherDetailsTable data={data} toggleUnit={toggleUnit} />
                </WeatherDetailsWrapper>
        )

    } else {
        return <WeatherDetailsWrapper></WeatherDetailsWrapper>
    }
}

export default WeatherDetails