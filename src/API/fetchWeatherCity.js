import axios from 'axios'
import Keys from '../Keys/apiKeys'

const fetchWeatherCity = (location) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${Keys.openWeatherAPIKey}`)
}

export default fetchWeatherCity