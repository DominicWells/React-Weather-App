import React from 'react'

import MyMap from '../../Weather/Map/index'

const EmptyWeatherDetails = ({geoLocation, handleChangePosition}) => {
    return (
        <div>
            <div>
                To get Started, simply type a location into the search bar above,
                 or grab the marker below and place it on a location you'd like to know the weather for.
            </div>
            <MyMap position={geoLocation.position} handleChangePosition={handleChangePosition} />
        </div>
    )
}

export default EmptyWeatherDetails