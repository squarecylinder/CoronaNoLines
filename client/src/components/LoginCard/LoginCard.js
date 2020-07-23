import React, {useState} from 'react';
import './LoginCard.css'
import API from '../../utils/API'


  function LoginCard() {

    const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleLoginSubmit() {
      API.PostLogin({username: username, password: password}).then(res => { console.log(res.data)})
  }

    return (
    <div className="col-3" id="login-card">
<div className="card">
  <h5 className="card-header login-header">Login!</h5>
  <div className="card-body">
  <form onSubmit={handleLoginSubmit}>
              <div className="Form-group">
                  <label for="InputEmail">Username</label>
                  <input type="text" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={e => setUsername(e.target.value)}></input>
              </div>
              <div className="Form-group">
                  <label for="InputPassword">Password</label>
                  <input type="password" className="form-control" id="InputPassword" onChange={e => setPassword(e.target.value)}></input>
              </div>
              <button type="submit" className="btn btn-primary btn-sm">Login</button>
              <button type="submit" href="/signup" className="btn btn-danger btn-sm"><a href="/signup">Create Account</a></button>
          </form>
  </div>
</div>
</div>

  );
}

export default LoginCard;



