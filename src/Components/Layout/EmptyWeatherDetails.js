import React from 'react'

import MyMap from '../../Weather/Map/index'
import TextDiv from '../Layout/Text/TextDiv'

const EmptyWeatherDetails = ({geoLocation, handleChangePosition}) => {
    return (
        <div>
            <TextDiv>
                To get Started, simply type a location into the search bar above,
                 or grab the marker below and place it on a location you'd like to know the weather for.
            </TextDiv>
            <MyMap position={geoLocation.position} handleChangePosition={handleChangePosition} />
        </div>
    )
}

export default EmptyWeatherDetails