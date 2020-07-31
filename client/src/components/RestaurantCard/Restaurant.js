import React from 'react';
import './restaurant.css';
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import axios from 'axios'

const containerStyle = {
  width: '400px',
  height: '400px'
};
 

//Need to dynamically inject fields from MongoDb
function Restaurant({companyName, address, dineIn, tables, outsideDining, takeOut, driveThru, open, masks, userCreated, handleBtnClick}) {
  const [map, setMap] = React.useState(null)
  const [center, setCenter] = React.useState({ lat: null, lng: null })
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBWs77OPf3_03s5yGD-UtwXeR5B5q9TuF8")
    .then(res => {
      setCenter({ lat: res.data.results[0].geometry.location.lat, lng: res.data.results[0].geometry.location.lng, })
      const myLatLng = new window.google.maps.LatLng(res.data.results[0].geometry.location.lat, res.data.results[0].geometry.location.lng)
      const marker = new window.google.maps.Marker({ position: myLatLng, title: companyName })
      marker.setMap(map)
    })
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  
  return (
    <div className="col-12" id="restaurant-card">
<div className="card">
  <h5 className="card-header restaurant-header">{companyName}</h5>
  <div className="card-body card-list">
    <h6>Address: {address} </h6>
    <h6>Open: <i className={open ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Allowing dine-In: <i className={dineIn ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Amount of tables: {tables}</h6>
    <h6>Open patio: <i className={outsideDining ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Open drive-thru: <i className={driveThru ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Order take-out: <i className={takeOut ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Masks required: <i className={masks ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    </div>
    <div className="scroll-btn">
      {/*
    <button onClick={handleBtnClick} className="btn btn-info back-btn" data-value="back">Previous Restaurant</button>
    <button onClick={handleBtnClick} className="btn btn-success next-btn" data-value="next">Next Restaurant</button>
      */}
  </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
   
  <div className="card-footer restaurant-footer">
    Last updated: {userCreated}
  </div>
</div>
</div>

  );
}

export default Restaurant;