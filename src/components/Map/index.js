import React,{useState} from 'react';
import ReactMapGL,{Marker} from 'react-map-gl'
import Logo from '../../assets/Images/logo.svg'



function Map() {
  //Coordinates for Mississauga, Ontario
  const longitude = -79.640579
  const latitude = 43.595310

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude,
    longitude,
    zoom: 11
  })

  

  return (

    <ReactMapGL
      mapStyle={process.env.REACT_APP_MAP_STYLE}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
     {...viewport}
     onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker
        longitude={longitude}
        latitude={latitude}
        offsetLeft={-50}
        offsetTop={-80}
      >
          <img src={Logo} alt="logo" />
      </Marker>

    </ReactMapGL>
  )
}

export default Map