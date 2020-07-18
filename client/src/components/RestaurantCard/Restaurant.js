import React, { useContext } from 'react';
import './restaurant.css'

//Need to dynamically inject fields from MongoDb
function Restaurant() {
    return (
    <div className="col-4" id="restaurant-card">
<div className="card">
  <h5 className="card-header restaurant-header">Insert Restaurant Name Here.</h5>
  <div className="card-body">
      <div>
          insert map here.
      </div>
    <h6></h6>
    <h6>Insert Dine-In.</h6>
    <h6>Insert Table Count.</h6>
    <h6>Insert Outside Dining.</h6>
    <h6>Insert Drive-Thru.</h6>
    <h6>Insert Take-Out.</h6>
    <h6>Insert Masks.</h6>
  </div>
  <div className="card-footer restaurant-footer">
    Last updated: Insert "User Updated"
  </div>
</div>
</div>

  );
}

export default Restaurant;