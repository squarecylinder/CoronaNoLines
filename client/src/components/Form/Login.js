import React, {useState} from 'react';
import API from '../../utils/API'
import './Login.css'


function LoginInput() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function handleLoginSubmit(event) {
        event.preventDefault()
        API.PostLogin({username: username, password: password})
        .then((data) => { console.log(data); alert ("You have been successfully logged in " + username)})
        .then(() => window.location = ('/accountpage/' + username))
    }

    return (
        <div className="col-6" id="login-form">
        <div className="text-center signup-header">
            <h3>Log In!</h3>
            <h6>Please sign in with your consumer or business account credentials.</h6>
        </div>

            <form onSubmit={handleLoginSubmit} className="col form-bg">
                <div className="row">
                <div className="Form-group col-md-6">
                    <label for="InputEmail" className="input-label">Username</label>
                    <input type="text" className="form-control form-box" id="InputEmail" aria-describedby="emailHelp" onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div className="Form-group col-md-6">
                    <label for="InputPassword" className="input-label">Password</label>
                    <input type="password" className="form-control form-box" id="InputPassword" onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <button type="submit" className="btn btn-primary login-btn btn-block">Login</button>
                </div>
                
                
            </form>
        </div>
    )
}
export default LoginInput;