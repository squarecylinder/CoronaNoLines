import React, {useState} from 'react';

function Nav() {
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
        <a class="nav-link" href="/signup"><span class="fas fa-user"></span> Sign Up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login"><span class="fas fa-sign-in-alt"></span> Login</a>
      </li>
    </ul>
  </nav>
</div>

  );
}

export default Nav;

