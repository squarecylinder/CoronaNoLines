import React from 'react';
import './restaurant.css';
import {GoogleMap, LoadScript} from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '200px'
};
 
const center = {
  lat: -3.745,
  lng: -38.523
};
 
//Need to dynamically inject fields from MongoDb
function Restaurant({companyName, address, dineIn, tables, outsideDining, takeOut, driveThru, open, masks, userCreated, handleBtnClick}) {
  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
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
  <div className="map-container">
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
      </div>
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

  
   
  <div className="card-footer restaurant-footer">
    Last updated: {userCreated}
  </div>
</div>
</div>

  );
}

export default Restaurant;