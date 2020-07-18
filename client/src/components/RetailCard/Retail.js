import React from 'react';
import './retail.css'

//Need to dynamically inject fields from MongoDb
function Retail({companyName, address, open, masks, curbside, handleRetailBtnClick, userCreated}) {
    return (
    <div className="col-4" id="retail-card">
<div className="card">
  <h5 className="card-header retail-header">{companyName}</h5>
  <div className="card-body">
      <div>
      Address: {address}
      </div>
    <h6>Open: <i className={open ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Curbside: <i className={curbside ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <h6>Masks required: <i className={masks ? 'fa fa-check' : 'fa fa-times'}></i></h6>
    <button onClick={handleRetailBtnClick} className="btn btn-info" data-value="back">Previous Retail Store</button>
    <button onClick={handleRetailBtnClick} className="btn btn-success" data-value="next">Next Retail Store</button>

  </div>
  <div className="card-footer text-muted retail-footer">
    Last updated: Insert {userCreated}
  </div>
</div>
</div>

  );
}

export default Retail;