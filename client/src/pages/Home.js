import React from 'react';
import BusinessCard from '../components/BusinessCard/BusinessCard';
import Map from '../components/Map/Map';

function Home() {
    let businesses = [1,2,3];
    const businessCards = businesses.map(business => <li className = "col-md-3"> <BusinessCard /></li>);
    return (
        <div className="jumbotron jumbotron-fluid bg2">
        <div>This is our homepage.
        <Map />
    <ul className = "row">{businessCards}</ul></div></div>
    );
}
export default Home;