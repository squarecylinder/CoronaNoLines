import React from 'react';
import './retail.css';
import {GoogleMap, /*LoadScript*/} from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '200px'
};
 
const center = {
  lat: -3.745,
  lng: -38.523
};

//Need to dynamically inject fields from MongoDb
function Retail({companyName, address, open, masks, curbside, handleRetailBtnClick, userCreated}) {
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
    <div id="retail-card">
<div className="card">
  <h5 className="card-header retail-header">{companyName}</h5>
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
    
  <div className="card-footer text-muted retail-footer">
    Last updated: {userCreated}
  </div>
</div>
</div>

  );
}

export default Retail;