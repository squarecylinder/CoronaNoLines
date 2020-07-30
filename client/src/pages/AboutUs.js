import React from 'react';
import Aboutusjumbotron from '../components/Jumbotron/Aboutusjumbotron'
import Chart from '../assets/images/chart.png'

function AboutUs() {
  return (
    <div>
      <Aboutusjumbotron />
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Case Western Reserve University's 2020 Coding Boot Camp final project for Group 4.</h5>
            <hr></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <div className="chart-pic">
              <img src={Chart} alt="chart" className="img-fluid"></img>
            </div>
          </div>
          <div className="col-5 team-section">
            <h5 className="members">Our Team</h5>
            <hr></hr>

            <h6 className="names">Jalen Straka</h6>
            <ul>
              <li>
                email@email.com
              </li>
            </ul>
            <h6 className="names">Jesse Hauck</h6>
            <ul>
              <li>
                email@email.com
              </li>
            </ul>

            <h6 className="names">Ryan Hashier</h6>
            <ul>
              <li>
                ryanahashier@gmail.com
              </li>
            </ul>

            <h6 className="names">ChinShin Chao</h6>
            <ul>
              <li>
                email@email.com
              </li>
            </ul>

          </div>
        </div>

        <div className="row">
          <div className="col-7">
            <div className="site-description">
              <h5>Always up-to-date and accurate.</h5>
              <p>Corona No Lines is a Covid-19 information website. It allows businesses to make real-time updates to their policies to better educate their customers. Accurate information is key as we all navigate through this ever changing global pandemic.</p>
              <h5>User Accounts</h5>
              <p>Consumer accounts will have access to all the data provided by our business accounts. They will be able to make decisions on which businesses carry the social-distancing protocols that mirror their needs.</p>
              <h5>Business Accounts</h5>
              <p>Business accounts are separated into 2 sub-categories - Retail or Restaurants.  After setting up an account, business users can update and present their most up-to-date Covid-19 procedures. </p>

            </div>
          </div>
          <div className="col-5">
          </div>
        </div>


      </div>
    </div>

  )
}

export default AboutUs;
