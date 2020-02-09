import axios from 'axios'
import Keys from '../Keys/apiKeys'

const fetchWeatherCoOrdinates = (lat, lng) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${Keys.openWeatherAPIKey}`)
}

export default fetchWeatherCoOrdinates