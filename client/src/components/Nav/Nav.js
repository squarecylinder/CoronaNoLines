import React, { useState } from 'react';
import API from '../../utils/API'
import './Nav.css'

function Nav() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleLoginSubmit(event) {
    event.preventDefault()
    API.PostLogin({ username: username, password: password }).then(alert("You have been successfully logged in " + username))
      .then(() => window.location = ('/accountpage/' + username))
  }
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/home">Home</a>
          </li>
        </ul>

        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle bg-dark login-nav-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="fas fa-sign-in"></span> Sign In</button>
              <div class="dropdown-menu">
                <form onSubmit={handleLoginSubmit} class="px-4 py-3">
                  <div class="form-group">
                    <label for="exampleDropdownFormEmail1">User Name</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" onChange={e => setUsername(e.target.value)} />
                  </div>
                  <div class="form-group">
                    <label for="exampleDropdownFormPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                  </div>
                  <button type="submit" class="btn btn-primary">Sign In</button>
                </form>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/signup">New to the page? Sign up</a>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/signup"><span class="fas fa-user"></span> Sign Up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/aboutus">AboutUs</a>
          </li>

        </ul>
      </nav>
    </div>

  );
}

export default Nav;

