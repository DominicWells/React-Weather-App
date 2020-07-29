import React, { Component } from 'react'
import fetchForecast from '../API/fetchForecast'
import styled from 'styled-components'
import moment from 'moment'

import DailyForecastChart from './DailyForecastChart'
import HourlyForecastChart from './HourlyForecastChart'

const ForecastContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GraphWrapper = styled.div`
    
`;

class ForecastContainer extends Component {
    constructor() {
        super()

        this.state = {
            dailyForecastData: false,
            dailyForecastGraphOption: 'pressure',
            hourlyForecastData: false,
            hourlyForecastGraphOption: 'pressure',
            error: null
        }
    }

    componentDidMount() {
        fetchForecast(this.props.data.coord, this.props.unit)
            .then(res => {
                console.log(res)
                this.setState({
                    dailyForecastData: res.data.daily,
                    hourlyForecastData: res.data.hourly
                })
            })
            .catch(err => {
                this.setState({
                    error: 'sumting wong'
                })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.data.coord !== prevProps.data.coord) {
            fetchForecast(this.props.data.coord)
            .then(res => {
                this.setState({
                    dailyForecastData: res.data.daily,
                    hourlyForecastData: res.data.hourly
                })
            })
            .catch(err => {
                this.setState({
                    error: 'sumting wong'
                })
            })
        }
    }

    generateDailyGraphData = data => {

        let graphData = data.map((obj, ind) => {
            
            const { dailyForecastGraphOption } = this.state

            return { name: moment().add(ind++, 'day').format('dddd') ,  [dailyForecastGraphOption]: (obj[dailyForecastGraphOption] && typeof obj[dailyForecastGraphOption] !== 'object') ? obj[dailyForecastGraphOption] : 0}
        })

        return graphData
    }

    generateHourlyGraphData = data => {

        let graphData = data.map((obj, ind) => {

            const { hourlyForecastGraphOption } = this.state

            return { name: moment().add(ind++, 'hour').format('hh:mm a') ,  [hourlyForecastGraphOption]: (obj[hourlyForecastGraphOption] && typeof obj[hourlyForecastGraphOption] !== 'object') ? obj[hourlyForecastGraphOption] : 0}
         })

        return graphData
    }

    handleDailyGraphChange = e => {
        this.setState({
            dailyForecastGraphOption: e.target.value
        })
    }

    handleHourlyGraphChange = e => {
        this.setState({
            hourlyForecastGraphOption: e.target.value
        })
    }

    render() {

        const { dailyForecastData, hourlyForecastData } = this.state
        
        return (
            <ForecastContainerWrapper>
                {dailyForecastData &&
                    <GraphWrapper>
                        <DailyForecastChart handleGraphChange={this.handleDailyGraphChange} yAxis={this.state.dailyForecastGraphOption} data={this.generateDailyGraphData(dailyForecastData)}/>
                    </GraphWrapper>
                }
                {hourlyForecastData &&
                    <GraphWrapper>
                        <HourlyForecastChart handleGraphChange={this.handleHourlyGraphChange} yAxis={this.state.hourlyForecastGraphOption} data={this.generateHourlyGraphData(hourlyForecastData)}/>
                    </GraphWrapper>
                }
            </ForecastContainerWrapper>
        )
    }
}

export default ForecastContainer