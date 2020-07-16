import React, {useState} from 'react';
import API from '../../utils/API'

function LoginInput() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function handleLoginSubmit() {
        API.PostLogin({username: username, password: password}).then(res => { console.log(res.data)})
    }

    return (
        <div>
            <div className="mt-4">
                <h2>Login!</h2>
            </div>
            <form onSubmit={handleLoginSubmit}>
                <div className="Form-group">
                    <label for="InputEmail">Username</label>
                    <input type="text" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={e => setUsername(e.target.value)}></input>
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