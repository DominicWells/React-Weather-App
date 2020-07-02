const hourlyGraphDataKeys = () => {
    return {
        pressure: 'hPA',
        temp: "temperature",
        humidity: 'Humidity, %',
        rain: "rainfall in mm",
        snow: "snowfall in mm",
        dew_point: 'dewpoint, atmospheric temperature',
        visibility: 'average visibility, metres',
        clouds: 'cloudiness, %'
    }
}

export default hourlyGraphDataKeys