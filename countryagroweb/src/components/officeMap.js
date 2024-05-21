import React from 'react'
import Map from 'react-map-gl';
import './officeMap.css'

// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => <h1>{text}</h1>

export const OfficeMap = () => {

   {/* <AnyReactComponent
          lat={-17.8361629}
          lng={31.1040652}
          text="My Marker"
        /> */}

  return (
 
      <Map
    mapLib={import('mapbox-gl')}
    initialViewState={{
      longitude:  -17.816638,
      latitude: 31.056858,
      zoom: 3.5
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />

  )
}