import React from 'react'

const GeoLocationPrompt = ({geoLocation}) => {

    let button

    if (geoLocation.code === 1) {
        button = <div>You currently have location switched off. You can enable it in your browser settings.</div>
    }
    return (
        button ? button : null
    )
}

export default GeoLocationPrompt