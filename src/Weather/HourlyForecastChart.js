import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import hourlyGraphDataKeys from '../API/configs/hourlyGraphDataKeys'

const HourlyForecastChart = ({data, handleGraphChange, yAxis}) => {
    
    let filterGraph = []

    Object.entries(hourlyGraphDataKeys()).map(cur => {
        if (Array.isArray(cur[1])) {
            cur[1].forEach(el => {
                filterGraph.push([cur[0]])
                filterGraph.push([[el]])
            })
        } else {
            filterGraph.push([cur[0]])
        }
    })

    const yAxisLabel = hourlyGraphDataKeys()[yAxis]

     return (
        <React.Fragment>
            <h2>48 Hour Weather Forecast</h2>   
                <LineChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name" stroke="###"/>
                    <YAxis dataKey={yAxis} label={{value: yAxisLabel, angle: -90, position: "left"}} stroke="###"/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey={yAxis} stroke="#82ca9d" />
                </LineChart>
            <select onChange={handleGraphChange}>    
                {filterGraph.map((cur, ind) => {
                    return <option key={ind} value={cur}>{cur}</option>
                })}
            </select>    
       </React.Fragment>
    )
}

export default HourlyForecastChart