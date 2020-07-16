import React from 'react';
import BusinessCard from '../components/BusinessCard/BusinessCard';
import Map from '../components/Map/Map';
import Retail from '../components/RetailCard/Retail'
import Restaurant from '../components/RestaurantCard/Restaurant'
import Jumbotron from '../components/Jumbotron/Jumbotron'

//Need to iterate to dynamically generate new cards
function Home() {
    let businesses = [1,2,3];
    const businessCards = businesses.map(business => <li className = "col-md-3"> <BusinessCard /></li>);
    return (

        <div className="Container">
            <div className="row">
            <Jumbotron />
                </div>
                <ul className = "row">{businessCards}</ul>
            <div className="row">
            <Retail />
            <Retail />
            <Retail />
            <Restaurant />
            <Restaurant />
            <Restaurant />
             </div>
        </div>
    )
}
export default Home