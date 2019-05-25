import React from 'react'

const WeatherDesc = ({ weather, location }) => {
    console.log(weather)
    return (
        <div>
            <span>{location}</span>
            <span><b>{weather[0].main}</b></span>
            <span>({weather[0].description})</span>
        </div>
    )
}

export default WeatherDesc