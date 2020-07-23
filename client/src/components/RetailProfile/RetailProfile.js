import React from 'react';
import './RetailProfile.css'
import Logo from '../Jumbotron/images/logo-placeholder.jpg'

function RetailProfile() {
    return (
        <div className="row" id="retail-profile-section">
            <div className="col-9 profile-background">
                <div className="row" id="retail-profile-header">
                    <div className="col-5">
                        <h5 className="retail-name">Insert Retail Name</h5>
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
                        <h6>Username:</h6>
                        <hr></hr>
                        <h6>Password:</h6>
                        <hr></hr>
                        <h6>Company Name:</h6>
                        <hr></hr>
                        <h6>Currently Opened:</h6>
                        <hr></hr>
                        <h6>Address:</h6>
                        <hr></hr>
                        <h6>Masks:</h6>
                        <hr></hr>
                        <h6>Curbside:</h6>

                    </div>
                    <div className="col-9">
                        <h6>Insert Email Address</h6>
                        <hr></hr>
                        <h6>Insert Username</h6>
                        <hr></hr>
                        <h6>Insert Password</h6>
                        <hr></hr>
                        <h6>Insert Company Name</h6>
                        <hr></hr>
                        <h6>Currently Opened:</h6>
                        <hr></hr>
                        <h6>Insert Address</h6>
                        <hr></hr>
                        <h6>Insert Masks</h6>
                        <hr></hr>
                        <h6>Insert Curbside</h6>
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