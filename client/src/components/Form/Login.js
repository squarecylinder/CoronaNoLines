import React, {useState} from 'react';
import API from '../../utils/API'

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
        <div>
            <div className="mt-4">
                <h5>Login!</h5>
            </div>
            <form onSubmit={handleLoginSubmit}>
                <div className="Form-group col-md-4">
                    <label for="InputEmail">Username</label>
                    <input type="text" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={e => setUsername(e.target.value)}></input>
                </div>
                <br/>
                <div className="Form-group col-md-4">
                    <label for="InputPassword">Password</label>
                    <input type="password" className="form-control" id="InputPassword" onChange={e => setPassword(e.target.value)}></input>
                    <br/>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                
                
            </form>
        </div>
    )
}
export default LoginInput;