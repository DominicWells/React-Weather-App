import React from 'react'

const WeatherDetailsTable = ({ data, toggleUnit }) => {
    
    return (
        <div>
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
            <button onClick={() => toggleUnit(data)}>toggle Imperial/Metric</button>
        </div>
    )
}

export default WeatherDetailsTable