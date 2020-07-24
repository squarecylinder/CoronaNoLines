import React from 'react';
import Aboutusjumbotron from '../components/Jumbotron/Aboutusjumbotron'
import AboutUsImg from '../components/AboutUsImg';

function AboutUs() {
    return (
        <div>
            <div className="container">
            <div className="row">
                <AboutUsImg />
            </div>
            <div className="row">
                <Aboutusjumbotron />
            </div>
            <div  className="row">

            </div>
              <h1 className="display-6 text-primary"><strong>Latest Covid-19 updates</strong></h1>
              <p className="display-6 text-primary"><strong>Provide latest business operating hours and Covid etiquettes needed.</strong></p>
              <a><button className="btn btn-primary">Home</button></a>
                 
           
              <h2 className="display-6 text-primary"><strong>Project Three Team Members: Jalen Straka, Ryan Hashier, Jesse Hauck, ChinShin Chao</strong></h2>
              <p className="display-6 text-primary"><strong>Covid-19 World</strong></p>
              <p className="display-6 text-primary"><strong>Our Purpose</strong></p>
              <p className="display-6 text-primary"><strong>We create this website to connect individuals to businesses locally providing latest business information for customers.</strong></p>
                  
          
              <h2 className="display-6 text-primary"><strong>Please contact us when you experience difficulties with the website.</strong></h2>
              <p></p>
              <p className="display-6 text-primary"><strong>24 hours support service line: (216) 444-5555</strong></p>
              <p className="display-6 text-primary"><strong>fullstack.team4@fullstackemail.com</strong></p>
              <p><button className="btn btn-primary">Contact</button></p>
            </div>
          </div>
        
    )} 

export default AboutUs;
//className="jumbotron jumbotron-fluid bg"