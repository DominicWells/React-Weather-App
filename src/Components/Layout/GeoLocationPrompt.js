import React from 'react'
import TextDiv from '../Layout/Text/TextDiv'

const GeoLocationPrompt = ({geoLocation}) => {

    let button

    if (true) {
        button = <TextDiv>You currently have location switched off. You can enable it in your browser settings.</TextDiv>
    }
    return (
        button ? button : null
    )
}

export default GeoLocationPrompt