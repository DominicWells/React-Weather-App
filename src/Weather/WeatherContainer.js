import React, { Component } from 'react'
import styled from 'styled-components'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import fetchWeatherCoOrdinates from '../API/fetchWeatherCoOrdinates'
import handleAPIResponse from '../API/handleAPIResponse'
import fetchWeatherCity from '../API/fetchWeatherCity'
import SearchForm from '../Weather/SearchForm'
import WeatherDetails from './WeatherDetails'
import ForecastContainer from './ForecastContainer'
import EmptyWeatherDetails from '../Components/Layout/EmptyWeatherDetails'
import GeoLocationPrompt from '../Components/Layout/GeoLocationPrompt'
import H1 from '../Components/Layout/Titles/H1'
import ToggleButton from '../Components/Layout/Buttons/ToggleButton'
import SwitchCarouselSlideButton from '../Components/Layout/Buttons/SwitchCarouselSlideButton'

const WeatherContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class WeatherContainer extends Component {
    constructor() {
        super()

        this.state = {
            inputValue: '',
            error: false,
            data: false,
            unit: "metric",
            geoLocation: {}
        }

        // default co-ordinates - London
        this.position = [51.5, 0.1]
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.state.data && prevState.unit === this.state.unit) {
            let imageURL
            if (Object.entries(this.state.data).length !== 0) {
                imageURL = `/images/${this.state.data.weather[0].main}.jpg`
            } 

            document.body.style = `background-image: url(${imageURL});`
        }
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
                        error: err
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

        return (
            <WeatherContainerWrapper>
                <H1>React Weather App</H1>
                <SearchForm handleSubmit={handleSubmit} error={error} value={inputValue} handleChange={handleChange} />     
                <GeoLocationPrompt geoLocation={geoLocation}/>
                {(data) ?
                    <React.Fragment>
                        <ToggleButton onClick={this.toggleUnit} unit={unit}>Toggle Unit</ToggleButton>
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
                            <SwitchCarouselSlideButton />
                        </CarouselProvider>
                    </React.Fragment>
                : <EmptyWeatherDetails geoLocation={geoLocation} handleChangePosition={this.handleChangePosition}/>}
            </WeatherContainerWrapper>
        )
    }
}

export default WeatherContainer