import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
  width: '600px',
  height: '400px',
};

const center = {
    lat: 40.367474,
    lng: -82.996216,
};

function MyComponent() {
  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBWs77OPf3_03s5yGD-UtwXeR5B5q9TuF8"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
export default React.memo(MyComponent)