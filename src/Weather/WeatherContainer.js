import React, { Component } from 'react'
import styled from 'styled-components'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import fetchWeatherCoOrdinates from '../API/fetchWeatherCoOrdinates'
import handleAPIResponse from '../API/handleAPIResponse'
import fetchWeatherCity from '../API/fetchWeatherCity'
import WeatherDetails from './WeatherDetails'
import ForecastContainer from './ForecastContainer'
import EmptyWeatherDetails from '../Components/Layout/EmptyWeatherDetails'
import GeoLocationPrompt from '../Components/Layout/GeoLocationPrompt'

const WeatherContainerWrapper = styled.div`
    background-image: url(${(props) => props.imageURL});
    background-repeat: no-repeat;
    background-size: cover;
    height: 1000px;
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

const SlideButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

class WeatherContainer extends Component {
    constructor() {
        super()

        this.state = {
            inputValue: '',
            error: null,
            data: false,
            unit: "metric",
            geoLocation: {}
        }

        this.position = [51.5, 0.1]
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            pos => {
                this.setState({
                    geoLocation: { position: [pos.coords.latitude, pos.coords.longitude], code: null, message: null }
                })
            },
            err => {
               this.setState({
                   geoLocation: { position: this.position ,code: err.code, message: err.message }
               })
            },
             { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }

    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = e => {

        e.preventDefault()

        const { inputValue, unit } = this.state

        if (inputValue.length > 0) {
            // do a fetch to the API!
            fetchWeatherCity(inputValue, unit)
                .then(res => {
                    this.setState( {
                        data: handleAPIResponse(res.data)
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
    }

    toggleUnit = () => {

        let unit

        if (this.state.unit === "imperial")
            unit = "metric"
        else
            unit = "imperial"
    
        fetchWeatherCity(this.state.inputValue, unit)
            .then(res => {
                this.setState( {
                    data: handleAPIResponse(res.data),
                    unit: unit
                })
            })
            .catch(err => {
                this.setState({
                    error: 'error converting the data!'
                })
            })
        
    }

    render() {

        const { inputValue, data , error, geoLocation, unit } = this.state
        const { handleSubmit, handleChange } = this
        
        let imageURL = `/images/default.jpg`

        if (Object.entries(data).length !== 0) {
           imageURL = `/images/${data.weather[0].main}.jpg`

        } 

        return (
            <WeatherContainerWrapper imageURL={imageURL}>
                <h1>React Weather App</h1>
                <Form onSubmit={handleSubmit}>
                    <Error>{error || ''}</Error>
                    <Input
                        type='text'
                        placeholder='search for a location here...'
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <Input
                        type='submit'
                        value='Submit'
                    />
                </Form>
                <GeoLocationPrompt geoLocation={geoLocation}/>
                {(data) ?
                    <React.Fragment>
                        <CarouselProvider totalSlides={3} naturalSlideHeight={800} naturalSlideWidth={800} dragEnabled={false}> 
                            <Slider style={{width: '800px'}}>
                                <Slide index={0}>
                                    <WeatherDetails data={data} handleChangePosition={this.handleChangePosition}/>
                                </Slide>
                                <Slide index={1}>
                                    <ForecastContainer data={data} unit={unit}/>
                                </Slide>
                                <Slide index={2}>
                                    <div>slide 2</div>
                                </Slide>
                            </Slider>
                            <SlideButtonWrapper>
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </SlideButtonWrapper>
                        </CarouselProvider>
                        <div>Current Unit: {unit}</div>
                        <button onClick={this.toggleUnit}>Change Units</button>
                    </React.Fragment>
                : <EmptyWeatherDetails geoLocation={geoLocation} handleChangePosition={this.handleChangePosition}/>}
            </WeatherContainerWrapper>
        )
    }
}

export default WeatherContainer