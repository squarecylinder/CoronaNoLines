import React from 'react';
import MapContainer from '../components/Map/Map';
import Retail from '../components/RetailCard/Retail'
import Restaurant from '../components/RestaurantCard/Restaurant'
import Jumbotron from '../components/Jumbotron/Jumbotron'

//Need to iterate to dynamically generate new cards
function Home() {
    // let businesses = [1,2,3];
    // const businessCards = businesses.map(business => <li className = "col-md-3"> <BusinessCard /></li>);
    return (

        <div className="Container">
            <div className="row">
            <Jumbotron />
            </div>
            <div className="row">
                <Retail />
                <Retail />
                <Retail />
                <Restaurant />
                <Restaurant />
                <Restaurant />
             </div>
             {/* <MapContainer /> */}
        </div>
    )
}
export default Home