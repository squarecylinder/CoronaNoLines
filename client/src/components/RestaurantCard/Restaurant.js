import React, { useContext } from 'react';
import './restaurant.css'

//Need to dynamically inject fields from MongoDb
function Restaurant({companyName, address, dineIn, tables, outsideDining, takeOut, driveThru, open, masks, userCreated}) {
    return (
    <div className="col-4" id="restaurant-card">
<div className="card">
  <h5 className="card-header restaurant-header">{companyName}</h5>
  <div className="card-body">
      <div>
          {address}
      </div>
    <h6>Open: <i className={open ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Allowing dine-In: <i className={dineIn ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Amount of tables: {tables}</h6>
    <h6>Open patio: <i className={outsideDining ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Open drive-thru: <i className={driveThru ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Order take-out: <i className={takeOut ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Masks required: <i className={masks ? 'fa fa-check' : 'fa fa-times'}></i></h6>
  </div>
  <div className="card-footer restaurant-footer">
    Last updated: {userCreated}
  </div>
</div>
</div>

  );
}

export default Restaurant;