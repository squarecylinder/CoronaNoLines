import React, { useState } from 'react';
import API from '../../utils/API'
import './Nav.css'
import { useEffect } from 'react';

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [accountPage, setAccountPage] = useState(null);
  

  useEffect(() => {
    API.SessionCheck().then((res) => {
      if (res.status === 200) {
          setIsLoggedIn(true);
          setAccountPage("/accountpage/" + res.data.username)
      };})
  }, [isLoggedIn])

  function handleLoginSubmit(event) {
    event.preventDefault()
    API.PostLogin({ username: username, password: password }).then(alert("You have been successfully logged in " + username))
      .then(() => window.location = ('/accountpage/' + username))
  }
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/home">Home</a>
          </li>
        </ul>

        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle bg-dark login-nav-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="fas fa-sign-in"></span> Sign In</button>
              <div className="dropdown-menu">
                <form onSubmit={handleLoginSubmit} className="px-4 py-3">
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" onChange={e => setUsername(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                  </div>
                  <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/signup">New to the page? Sign up</a>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/signup"><span className="fas fa-user"></span> Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/aboutus">About Us</a>
          </li>
          <li className="nav-item">
            <a className={isLoggedIn === false ? 'nav-link disabled' : "nav-link"} href={accountPage}>Account Page</a>
          </li>

        </ul>
      </nav>
    </div>

  );
}

export default Nav;

