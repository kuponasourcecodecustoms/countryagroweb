import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'
import './officeMap.css'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1IjoibmlnZWx2ZXJlIiwiYSI6ImNsd2h1b2p2OTBqN2wycXBmcm04NHl6N2gifQ.Sh6lEdLP_y1uOhGxTQCBXQ'

export const OfficeMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const harareCityCoords = { longitude :31.056858, latitude: -17.8361629 }
  const officeCoords = { longitude: 31.1040652, latitude: -17.8361629 }

  useEffect(() => {
    if (map.current) {
      new mapboxgl.Marker().setLngLat([officeCoords.longitude,officeCoords.latitude]).addTo(map.current)
      return
    }

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [harareCityCoords.longitude, harareCityCoords.latitude],
      zoom: 12
    })
   
  })

  return (
    <div className="officeMap">
      <div ref={mapContainer} className="map-container" />
    </div>
  );

}