import React from 'react';
import './Aboutusjumbotron.css';
import AboutUsImg from '../AboutUsImg.js'


function Aboutusjumbotron() {
  return (
    <div className="col display-6 blue" id="aboutusjumbotron-section">
      <AboutUsImg />
    <h2 className="aboutusjumbo-h2 display-6 blue text-center"><strong>All About Us</strong></h2>
    <p className="aboutusjumbo-p display-6 blue"><strong>We live in a Covid-19 World, and getting the most up-to-date information is critical when making decisions.  Even when simply choosing where to shop or eat. Whether you are a business looking to keep your customers in the loop, or a customer wondering if your favorite store or restaurant is implimenting safe, social distance policies, our database gives you all the most important information.</strong></p>
  </div>

);
}

export default Aboutusjumbotron;
