import React from 'react';
import './UserProfile.css'
import Logo from '../Jumbotron/images/logo-placeholder.jpg'

function UserProfile() {
    return (
        <div className="row" id="user-profile-section">
            <div className="col-9 profile-background">
                <div className="row" id="profile-header">
                    <div className="col-5">
                        <h5 className="user-name">Insert User Name</h5>
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
                        
                    </div>
                    <div className="col-9">
                        <h6>Insert Email Address</h6>
                        <hr></hr>
                        <h6>Insert Username</h6>
                        <hr></hr>
                        <h6>Insert Password</h6>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div>
                    <img src={Logo} alt="placeholder" className="img-fluid"></img>
                </div>
            </div>
        </div>


    );
}

export default UserProfile;