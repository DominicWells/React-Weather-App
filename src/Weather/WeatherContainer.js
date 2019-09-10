import React, { Component } from 'react'
import styled from 'styled-components'

import fetchWeatherCity from '../API/fetchWeatherCity'
import WeatherDetails from './WeatherDetails'

const WeatherContainerWrapper = styled.div`
    height: 90%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    

`;

const Form = styled.form`
    margin: 10px;
`;

const Error = styled.div`
    background-color: pink;
    display: flex;
    justify-content: center;
`;

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
            <WeatherContainerWrapper>
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
                {data &&
                    <WeatherDetails data={data}/>
                }
            </WeatherContainerWrapper>
        )
    }
}

export default WeatherContainer