import React from 'react';
import './RestaurantProfile.css'
import Logo from '../../assets/images/logo-placeholder.jpg'
import API from '../../utils/API'                                                                 

function RestaurantProfile({email, companyName, open, address, city, state, zip , masks, curbside, driveThru, dineIn, tables, outsideDining, takeOut}) {
    function handleDisable() {
        var cls = document.getElementsByClassName('form');

        for(var i = 0; i < cls.length; i++) {
        cls[i].removeAttribute('disabled');
        }
    }
    function handleEditClick() {
        setEdit(true)
        handleDisable()
    }
    function handleSaveClick() {
        let updatedEmail = document.getElementById('email').value;
        let updatedPassword = document.getElementById('password').value;
        let updatedCompanyName = document.getElementById('companyName').value;
        let updatedAddress = document.getElementById('address').value;
        let updatedCity = document.getElementById('city').value;
        let updatedState = document.getElementById('state').value;
        let updatedZip = document.getElementById('zip').value;
        // let updatedCurbside = document.getElementById('curbside').value;
        // let updatedOpen = document.getElementById('open').value;
        // let updatedMasks = document.getElementById('masks').value;
        API.Update( 
          { username: updatedEmail, 
            password: updatedPassword,
            companyName: updatedCompanyName, 
            address: updatedAddress,
            city: updatedCity,
            state: updatedState,
            zip: updatedZip,
            // curbside: updatedCurbside,
            // open: updatedOpen, 
            // masks: updatedMasks
        }).then(alert("Saving..."), window.location.reload())
    }


    return (
        <div className="row" id="rest-profile-section">
            <div className="col-9 profile-background">
            <div className="row" id="rest-profile-header">
                    <div className="col-5">
                        <h5 className="rest-name">{companyName}</h5>
                    </div>
                    <div className="col-7">
                        <button type="button" class="btn btn-success btn-sm float-right save-btn" onClick={handleSaveClick}>Save Profile</button>
                        <button type="button" class="btn btn-danger btn-sm float-right edit-btn" onClick={handleEditClick}>Edit Profile </button>
                    </div>
                </div>
                <div className="row categories">
                    <div className="col-3">
                        <h6>Email Address: <input className="form" type="text" id="email" placeholder={email} disabled onChange={e => (e.target.value)}/></h6>
                        <hr></hr>
                        <h6>Password: <input className="form" type="text" id="password" placeholder="*****" disabled onChange={e => (e.target.value)}/></h6>
                        <hr></hr>
                        <h6>Company Name: <input className="form" type="text" id="password" placeholder={companyName} disabled onChange={e => (e.target.value)}/></h6>
                        <hr></hr>
                        <h6>Currently Opened: <i className={open ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                        <hr></hr>
                        <h6>Address <input className="form" type="text" id="password" placeholder={address} disabled onChange={e => (e.target.value)}/></h6>
                        <hr></hr>
                        <h6>City <input className="form" type="text" id="password" placeholder={city} disabled onChange={e => (e.target.value)}/></h6>
                        <hr></hr>
                        <h6>State <input className="form" type="text" id="password" placeholder={state} disabled onChange={e => (e.target.value)}/></h6>
                        <hr></hr>
                        <h6>Zip Code: <input className="form" type="text" id="password" placeholder={zip} disabled onChange={e => (e.target.value)}/></h6>
                        <hr></hr>
                        <h6>Masks: <i className={masks ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                        <hr></hr>
                        <h6>Curbside: <i className={curbside ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                        <hr></hr>
                        <h6>Dine In: <i className={dineIn ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                        <hr></hr>
                        <h6>Tables: <i className={tables ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                        <hr></hr>
                        <h6>Outside Dining: <i className={outsideDining ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                        <hr></hr>
                        <h6>Drive-Thru: <i className={driveThru ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                        <hr></hr>
                        <h6>Takeout: <i className={takeOut ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div>
                <img src={Logo} alt="placeholder" className="img-fluid"></img>
                </div>
            <button type="button" class="btn btn-primary btn-lg btn-block social-btn">Update Facebook Profile</button>
<button type="button" class="btn btn-info btn-lg btn-block social-btn">Send a Tweet</button>
<h6 class="social-media">Keep your social media accounts up to date by linking your WIP account page every time you make a change.</h6>
            </div>
            </div>


  );
  }
  
  export default RestaurantProfile;