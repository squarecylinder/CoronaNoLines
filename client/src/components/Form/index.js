import React from 'react';
import API from '../../utils/API'

function Input(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function handleLoginSubmit(){
    API.PostLogin(username, password).then()
    }

    return(
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
    )
}
export default Input;