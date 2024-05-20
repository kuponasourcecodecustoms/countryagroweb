import React from 'react'
import GoogleMapReact from 'google-map-react'
import './officeMap.css'

// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => <h1>{text}</h1>

export const OfficeMap = () => {
  const defaultProps = {
    center: {
      lat: -17.816638,
      lng: 31.056858
    },
    zoom: 13
  }

  return (
    <div className="locationMap" style={{ height: '80vh', width: '100%', borderRadius: '8px'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-17.8361629}
          lng={31.1040652}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}