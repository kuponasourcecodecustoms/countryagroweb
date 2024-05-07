import React from 'react';
import GoogleMapReact from 'google-map-react';
import './officeMap.css';

// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => <h1>{text}</h1>

export const OfficeMap = () => {
    const defaultProps = {
        center: {
          lat: -17.816638,
          lng: 31.056858
        },
        zoom: 12
      };
    return (
        //Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '50%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={-17.816638}
              lng={31.056858}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
    );
  }