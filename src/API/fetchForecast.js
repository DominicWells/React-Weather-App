import axios from 'axios'
import Keys from '../Keys/apiKeys'

const fetchForecast = position => {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.lat}&lon=${position.lon}&exclude=current,minutely&appid=${Keys.openWeatherAPIKey}`)
}

export default fetchForecast