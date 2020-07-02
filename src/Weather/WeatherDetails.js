import React from 'react'
import styled from 'styled-components'

import MyMap from './Map/index'
import WeatherDesc from './WeatherDesc'
import WeatherDetailsTable from './WeatherDetailsTable'

const WeatherDetailsWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MapWrapper = styled.div`
    padding: 0 20px;
`;

const WeatherDetails = ({ data, toggleUnit, handleChangePosition }) => {

    if (Object.entries(data).length !== 0) {

       const icon = data.weather[0].icon
       const position = [data.coord.lat,data.coord.lon]

        return (
            <React.Fragment>
                <WeatherDetailsWrapper>
                    <img width={100} height={100} alt='weather-icon' src={`https://api.openweathermap.org/img/w/${icon}.png`} />
                    <WeatherDesc weather={data.weather} location={data.name} />
                </WeatherDetailsWrapper>
                <MapWrapper>
                    <MyMap position={position} handleChangePosition={handleChangePosition} />
                </MapWrapper>
                <WeatherDetailsWrapper>
                    <WeatherDetailsTable data={data} toggleUnit={toggleUnit} />
                </WeatherDetailsWrapper>
            </React.Fragment>
        )

    } else {
        return <WeatherDetailsWrapper></WeatherDetailsWrapper>
    }
}

export default WeatherDetails