import React, { useRef, useEffect, useState } from 'react';
import Map from 'react-map-gl';
import mapboxgl from '!mapbox-gl'
import './officeMap.css'
import 'mapbox-gl/dist/mapbox-gl.css'

// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => <h1>{text}</h1>

mapboxgl.accessToken = 'pk.eyJ1IjoibmlnZWx2ZXJlIiwiYSI6ImNsd2h1b2p2OTBqN2wycXBmcm04NHl6N2gifQ.Sh6lEdLP_y1uOhGxTQCBXQ'

export const OfficeMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(31.056858);
  const [lat, setLat] = useState(-17.8361629);
  const [zoom, setZoom] = useState(12);


  useEffect(() => {
    if (map.current) {
      const startMarker = new mapboxgl.Marker().setLngLat([31.1040652,-17.8361629]).addTo(map.current)
      return
    }

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    })
  })

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );

}