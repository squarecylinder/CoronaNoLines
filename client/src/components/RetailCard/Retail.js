import React from 'react';
import './retail.css';
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import axios from 'axios'
const containerStyle = {
  width: '400px',
  height: '400px'
};
 

//Need to dynamically inject fields from MongoDb
function Retail({companyName, address, open, masks, curbside, handleRetailBtnClick, userCreated}) {
  
  const [map, setMap] = React.useState(null)
  const [center, setCenter] = React.useState({lat: null, lng: null})
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBWs77OPf3_03s5yGD-UtwXeR5B5q9TuF8")
    .then(res => {
    setCenter({lat: res.data.results[0].geometry.location.lat, lng: res.data.results[0].geometry.location.lng, })
    const myLatLng = new window.google.maps.LatLng(res.data.results[0].geometry.location.lat, res.data.results[0].geometry.location.lng)
    const marker = new window.google.maps.Marker({position: myLatLng, title: companyName})
    marker.setMap(map)})
    map.fitBounds(bounds);
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  
  return (
    <div id="retail-card">
<div className="card">
  <h5 className="card-header retail-header">{companyName}</h5>
  <div className="card-body card-list">
    <h6>Address: {address} </h6>
    <h6>Open: <i className={open ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Curbside: <i className={curbside ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Masks required: <i className={masks ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    </div>
    <div className="scroll-btn-retail">
      {/*
    <button onClick={handleRetailBtnClick} className="btn btn-info back-btn" data-value="back">Previous Retail Store</button>
    <button onClick={handleRetailBtnClick} className="btn btn-success next-btn" data-value="next">Next Retail Store</button>
      */}
    </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    
  <div className="card-footer text-muted retail-footer">
    Last updated: {userCreated}
  </div>
</div>
</div>

  );
}

export default Retail;