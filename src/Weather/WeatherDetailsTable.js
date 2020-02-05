import React from 'react'

const WeatherDetailsTable = ({ data, toggleUnit }) => {
    console.log(data)
    return (
        <div>
        <button onClick={() => toggleUnit(data)}>toggle Imperial/Metric</button>
            <div>
                Temperature: {data.main.temp}
            </div>
            <div>
                Pressure: {data.main.pressure}
            </div>
            <div>
                Humidity: {data.main.humidity}
            </div>
            <div>
                Visibility: {data.visibility}
            </div>
        </div>
    )
}

export default WeatherDetailsTable