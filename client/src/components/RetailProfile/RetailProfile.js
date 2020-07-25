import React, {useState} from 'react';
import './RetailProfile.css'
import Logo from '../../assets/images/logo-placeholder.jpg'




function RetailProfile({email, password, companyName, open, address, city, state, zip , masks, curbside}) {
    const [edit, setEdit] = useState(false);
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
    

    return (
        <div className="row" id="retail-profile-section">
            <div className="col-9 profile-background">
                <div className="row" id="retail-profile-header">
                    <div className="col-5">
                        <h5 className="retail-name">{companyName}</h5>
                    </div>
                    <div className="col-7">
                        <button type="button" class="btn btn-success btn-sm float-right save-btn">Save Profile</button>
                        <button type="button" class="btn btn-danger btn-sm float-right edit-btn" onClick={handleEditClick}>Edit Profile </button>
                    </div>
                </div>
                <div className="row categories">
                    <div className="col-sm-12">
                        <h6>Email Address: <input className="form" type="text" id="email" placeholder={email} disabled/></h6>
                        <hr></hr>
                        <h6>Password: <input className="form" type="text" id="password" placeholder="*****" disabled/></h6>
                        <hr></hr>
                        <h6>Company Name: <input className="form" type="text" id="companyName" placeholder={companyName} disabled/></h6>
                        <hr></hr>
                        <h6>Currently Opened: <i className={open ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                        <hr></hr>
                        <h6>Address: <input type="text" className="form" id="address" placeholder={address} disabled/></h6>
                        <hr></hr>
                        <h6>City: <input type="text" className="form" id="city" placeholder={city} disabled/></h6>
                        <hr></hr>
                        <h6>State: <input type="text" className="form"id="state" placeholder={state} disabled/></h6>
                        <hr></hr>
                        <h6>Zip Code: <input type="text" className="form" id="zip" placeholder={zip} disabled/></h6>
                        <hr></hr>
                        <h6>Masks: <i className={masks ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                        <hr></hr>
                        <h6>Curbside: <i className={curbside ? 'fa fa-check' : 'fa fa-times'}></i></h6>
                        
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