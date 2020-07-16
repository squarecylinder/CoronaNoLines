import React from 'react';
import Retail from '../components/RetailCard/Retail'
import Restaurant from '../components/RestaurantCard/Restaurant'
import Jumbotron from '../components/Jumbotron/Jumbotron'

//Need to iterate to dynamically generate new cards
function Home() {
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
        </div>
    )
}