import React /*,{useState}*/ from 'react';
import './UserProfile.css'
import Logo from '../../assets/images/logo-placeholder.jpg'
import API from '../../utils/API';

function UserProfile({email, password }) {
    // const [edit, setEdit] = useState(false);
    function handleDisable() {
        var cls = document.getElementsByClassName('form');

        for(var i = 0; i < cls.length; i++) {
        cls[i].removeAttribute('disabled');
        }
    }
    function handleEditClick() {
        // setEdit(true)
        handleDisable()
    }
    function handleSaveClick() {
        let updatedEmail = document.getElementById('email').value;
        let updatedPassword = document.getElementById('password').value;
        if(updatedEmail === "") {
            updatedEmail = email;
        }
        if(updatedPassword === "") {
            updatedPassword = password;
        }
        API.Update( 
          { username: updatedEmail, 
            password: updatedPassword,
        }).then(alert("Saving..."), window.location.reload())
    }
    return (
        <div className="row" id="user-profile-section">
            <div className="col-9 profile-background">
                <div className="row" id="profile-header">
                    <div className="col-5">
                        <h5 className="user-name">Account Information</h5>
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