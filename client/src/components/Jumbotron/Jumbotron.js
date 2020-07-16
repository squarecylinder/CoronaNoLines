import React from 'react';
import './jumbotron.css'

function Jumbotron() {
  return (

    <div className="col">
    <div class="jumbotron" id="jumbotron-section">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  </div>

);
}

export default Jumbotron;

