import React, { useState } from 'react';
import API from '../../utils/API'

function SignUpInput() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function handleSignUpSubmit() {
        API.PostSignUp(username, password).then()
    }

    return (
        <div>
            <div className="mt-4">
                <h2>Signup!</h2>
            </div>
            <form onSubmit={handleSignUpSubmit} className="col md-5">
                <div className="Form-group">
                    <label for="InputEmail">Email Address</label>
                    <input type="email" className="form-control" id="InputEmail" aria-described="emailHelp" onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div className="Form-group">
                    <label for="InputUsername">Username</label>
                    <input type="input" className="form-control" id="InputUsername" onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div className="Form-group">
                    <label for="InputPassword">Password</label>
                    <input type="password" className="form-control" id="InputPassword" onChange={e => setPassword(e.target.value)}></input>
                </div>
                    <label for="accountType">Choose an Account Type</label>
                    <select name="accountType" id="accountType">
                        <option value="consumer">Consumer</option>
                        <option value="business">Business</option>
                    </select>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}
export default SignUpInput;