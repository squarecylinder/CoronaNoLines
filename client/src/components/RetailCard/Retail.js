import React from 'react';
import './retail.css'

//Need to dynamically inject fields from MongoDb
function Retail() {
    return (
    <div className="col-4" id="retail-card">
<div className="card">
  <h5 className="card-header retail-header">Insert Retail Name Here.</h5>
  <div className="card-body">
      <div>
          insert map here.
      </div>
    <h6>Insert Address Here.</h6>
  </div>
  <div className="card-footer text-muted retail-footer">
    Last updated: Insert "User Updated"
  </div>
</div>
</div>

  );
}

export default Retail;