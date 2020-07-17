import React, {useState, useEffect } from 'react';
import MapContainer from '../components/Map/Map';
import Retail from '../components/RetailCard/Retail'
import Restaurant from '../components/RestaurantCard/Restaurant'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import API from '../utils/API';


    
//Need to iterate to dynamically generate new cards
function Home(props){

    // const [restaurants, setRestaurants] = useState([]);
    
    //  useEffect(() => {
    //     loadRestaurants();
    // }, []);

    // function loadRestaurants() {
    //     API.GetRestaurant()
    //     .then((res) => setRestaurants(res.data))
    //     .catch(err => console.log(err));
    // }
    return (

        <div className="Container">
            <div className="row">
            <Jumbotron />
            </div>
            <div  className="row">
                <Retail />
                <Retail />
                <Retail />
                <Restaurant companyName={props}/>
                {/* <Restaurant />
                <Restaurant /> */}
             </div>
             {/* <MapContainer /> */}
        </div>
    )
}
export default Home