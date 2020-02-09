const handleAPIResponse = data => {

    // do some basic conversion. Kelvin is useless to us, so convert temperature to Celcius
    data.main.temp = Math.round(((data.main.temp - 273.15) + Number.EPSILON) * 100) / 100

    return data
}

export default handleAPIResponse