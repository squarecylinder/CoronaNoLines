import React, {useState} from 'react';
import API from '../../utils/API'

function LoginInput() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function handleLoginSubmit() {
        API.PostLogin(username, password).then()
    }

    return (
        <div>
            <div className="mt-4">
                <h2>Login!</h2>
            </div>
            <form onSubmit={handleLoginSubmit}>
                <div className="Form-group">
                    <label for="InputEmail">Email Address</label>
                    <input type="email" className="form-control" id="InputEmail" aria-described="emailHelp" onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div className="Form-group">
                    <label for="InputPassword">Password</label>
                    <input type="password" className="form-control" id="InputPassword" onChange={e => setPassword(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}
export default LoginInput;