import React from 'react'

const WeatherDetailsTable = ({data}) => {
    
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
        </div>
    )
}

export default WeatherDetailsTable