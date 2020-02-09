import React, { Component } from 'react'
import styled from 'styled-components'

import fetchWeatherCoOrdinates from '../API/fetchWeatherCoOrdinates'
import handleAPIResponse from '../API/handleAPIResponse'
import fetchWeatherCity from '../API/fetchWeatherCity'
import WeatherDetails from './WeatherDetails'

const WeatherContainerWrapper = styled.div`
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    border-radius: 25px;
    background-color: #fff;
    padding: 3px;
`;

const Form = styled.form`
    margin: 10px;
`;

const Error = styled.div`
    background-color: pink;
    border-radius: 25px;
`;

class WeatherContainer extends Component {
    constructor() {
        super()

        this.state = {
            inputValue: '',
            error: '',
            data: [],
            unit: "metric"
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
                        data: handleAPIResponse(res.data),
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

    handleChangePosition = ({lat, lng}) => {
        //if (lat.length > 0 && lng.length > 0)
            //do a fetch to the API!
            fetchWeatherCoOrdinates(lat, lng)
            .then(res => {
                this.setState({
                    data: handleAPIResponse(res.data)
                })
            })
            .catch(err => {
                this.setState({
                    error: 'something went wrong!'
                })
            })
        //else {
        //   this.setState({
        //       error: 'invalid co-ordinates!'
        //   })
       // }
    }

    convertData = (data, unit) => {

        let temperature, pressure

        /*
            Pressure is initially Mb, so use that measurement and 
            convert it to Hectopascals.
        */

        // convert visibility - 
        //const visibility = data.visibility

        // convert humidity - 
        //const humidity = data.main.humidity

        if (unit === "metric")
        {
            // convert temperature - Fahrenheit to Celcius
            temperature = Math.round((((data.main.temp - 32) * 5/9) + Number.EPSILON) * 100) / 100

            // stock millibar pressure is already converted
            pressure = Math.round(((data.main.pressure * 33.8639) + 32 + Number.EPSILON) * 100) / 100

        } else if (unit === "imperial")
        {
            // convert temperature - Celcius to Fahrenheit
            temperature = Math.round(((data.main.temp * 9/5) + 32 + Number.EPSILON) * 100) / 100


            // convert pressure - millibars to Inches Hg
            pressure = Math.round((data.main.pressure * 0.029530 + 32 + Number.EPSILON) * 100) / 100
        }

        data.main.temp = temperature
        data.main.pressure = pressure

        return data
    }

    toggleUnit = data => {

        let unit

        if (this.state.unit === "imperial")
            unit = "metric"
        else
            unit = "imperial"

        this.setState({
            unit: unit,
            data: this.convertData(data, unit)
        })

    }

    render() {

        const { inputValue, data , error } = this.state
        const { handleSubmit, handleChange } = this

        return (
            <WeatherContainerWrapper>
                <h1>React Weather App</h1>
                <Form onSubmit={handleSubmit}>
                    <Error>{error || ''}</Error>
                    <Input
                        type='text'
                        placeholder='search for a city here...'
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <Input
                        type='submit'
                        value='Submit'
                    />
                </Form>
                <WeatherDetails data={data} toggleUnit={this.toggleUnit} handleChangePosition={this.handleChangePosition}/>
            </WeatherContainerWrapper>
        )
    }
}

export default WeatherContainer