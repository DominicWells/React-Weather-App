import React, { Component } from 'react'

import fetchWeatherCity from '../API/fetchWeatherCity'
import WeatherDetails from './WeatherDetails'

class WeatherContainer extends Component {
    constructor() {
        super()

        this.state = {
            inputValue: '',
            error: '',
            data: []
        }
    }

    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = e => {

        e.preventDefault()

        const { inputValue } = this.state

        if (inputValue.length > 0) {
            // do a fetch to the API!
            fetchWeatherCity(inputValue)
                .then(res => {
                    this.setState( {
                        data: res.data,
                        inputValue: ''
                    })
                })
                .catch(err => {
                    this.setState({
                        error: 'Something went wrong on our side! ' + err
                    })
                })
        } else {
            this.setState({
                error: 'do not submit an empty form!',
            })
        }
    }

    render() {

        const { inputValue, data , error } = this.state
        const { handleSubmit, handleChange } = this

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    {error || ''}
                    <input
                        type='text'
                        placeholder='search for a city here...'
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <input
                        type='submit'
                        value='Submit'
                    />
                </form>
                {data &&
                    <WeatherDetails data={data}/>
                }
            </div>
        )
    }
}

export default WeatherContainer