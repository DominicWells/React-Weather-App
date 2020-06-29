import React, { Component, createRef } from 'react'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class MyMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            marker: this.props.position,
            draggable: false,
            zoom: 8
        }
        this.refMarker = createRef()
    }

    toggleDraggable = () => {
        this.setState({
            draggable: !this.state.draggable
        })
    }

    updatePosition = () => {
        const marker = this.refMarker.current
        if (marker !== null) {
            this.setState({
              marker: marker.leafletElement.getLatLng(),
            })
            this.props.handleChangePosition(marker.leafletElement._latlng)
        }
    }

    render() {

        const { toggleDraggable, updatePosition, refMarker } = this
        const { zoom, draggable } = this.state
        const { position, marker } = this.props
        return (
            <React.Fragment>
                <Map style={{height: '450px'}} center={position} zoom={zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker 
                      ref={refMarker}
                      position={position}
                      draggable={draggable}
                      marker={marker}
                      onDragend={updatePosition}
                    >
                        <Popup>
                            <span onClick={toggleDraggable}>
                                {this.state.draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
                            </span>
                        </Popup>
                    </Marker>
                </Map>
            </React.Fragment>
        )
    }
}

export default MyMap