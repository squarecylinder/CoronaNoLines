import React from 'react';
import './RetailProfile.css'
import Logo from '../../assets/images/logo-placeholder.jpg'

function RetailProfile({email, password, companyName, open, address, city, state, zip , masks, curbside}) {
    return (
        <div className="row" id="retail-profile-section">
            <div className="col-9 profile-background">
                <div className="row" id="retail-profile-header">
                    <div className="col-5">
                        <h5 className="retail-name">{companyName}</h5>
                    </div>
                    <div className="col-7">
                        <button type="button" class="btn btn-success btn-sm float-right save-btn">Save Profile</button>
                        <button type="button" class="btn btn-danger btn-sm float-right edit-btn">Edit Profile</button>
                    </div>
                </div>
                <div className="row categories">
                    <div className="col-3">
                        <h6>Email Address:</h6>
                        <hr></hr>
                        <h6>Password:</h6>
                        <hr></hr>
                        <h6>Company Name:</h6>
                        <hr></hr>
                        <h6>Currently Opened:</h6>
                        <hr></hr>
                        <h6>Address:</h6>
                        <hr></hr>
                        <h6>City:</h6>
                        <hr></hr>
                        <h6>State:</h6>
                        <hr></hr>
                        <h6>Zip Code:</h6>
                        <hr></hr>
                        <h6>Masks:</h6>
                        <hr></hr>
                        <h6>Curbside:</h6>

                    </div>
                    <div className="col-9">
                        <input type="text" id="email" placeholder={email} disabled/>
                        <hr></hr>
                        <h6>******</h6>
                        <hr></hr>
                        <h6>{companyName}</h6>
                        <hr></hr>
                        <h6><i className={open ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                        <hr></hr>
                        <h6>{address}</h6>
                        <hr></hr>
                        <h6>{city}</h6>
                        <hr></hr>
                        <h6>{state}</h6>
                        <hr></hr>
                        <h6>{zip}</h6>
                        <hr></hr>
                        <h6><i className={masks ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                        <hr></hr>
                        <h6><i className={curbside ? 'fa fa-check' : 'fa fa-times'}></i></h6>
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

export default RetailProfile;