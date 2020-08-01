import React, {useState, useEffect } from 'react';
// import MapContainer from '../components/Map/Map';
import Retail from '../components/RetailCard/Retail';
import Restaurant from '../components/RestaurantCard/Restaurant';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import API from '../utils/API';
import HomeImg from '../components/HomeImg';
import {GoogleMap, LoadScript} from '@react-google-maps/api';

// import LoginCard from '../components/LoginCard/LoginCard'
//Need to iterate to dynamically generate new Cards
function Home(){
    //Creating our states and setters
    const [restaurant, setRestaurant] = useState({});
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantIndex, setRestaurantIndex] = useState(0);
    const [retail, setRetail] = useState({});
    const [retails, setRetails] = useState([]);
    const [retailIndex, setRetailIndex] = useState(0);
    // functional onMount/onUpdate to run our functions when page loads
     useEffect(() => {
        loadRestaurants();
        loadRetail();
    }, []);    

    // Creating our Previous and Next buttons, may be taken out in final stage
    function nextRestaurant(restaurantIndex) {
        if (restaurantIndex >= restaurants.length) {
            restaurantIndex = 0;
        }
        setRestaurant(restaurants[restaurantIndex]);
        setRestaurantIndex(restaurantIndex);
    }

    function previousRestaurant(restaurantIndex) {
        if (restaurantIndex < 0) {
            restaurantIndex = restaurants.length - 1;
        }
        setRestaurant(restaurants[restaurantIndex]);
        setRestaurantIndex(restaurantIndex);
    }
    // Allows our Previous and Next buttons to work
    function handleBtnClick(event) {
        // Get the title of the clicked button
        const btnName = event.target.getAttribute("data-value");
        if (btnName === "next") {
          const newRestaurantIndex = restaurantIndex + 1;
          nextRestaurant(newRestaurantIndex);
        } else {
          const newRestaurantIndex = restaurantIndex - 1;
          previousRestaurant(newRestaurantIndex);
        }
      }
    // Grabbing our database to load on the front end.
    function loadRestaurants() {
        API.GetRestaurant().then(restaurants => {
            setRestaurants(restaurants);
            setRestaurant(restaurants[0])
        }).catch(err => console.log(err));
    }
    // Same thing as the restaurants
    function nextRetail(retailIndex) {
        if (retailIndex >= retails.length) {
            retailIndex = 0;
        }
        setRetail(retails[retailIndex]);
        setRetailIndex(retailIndex);
    }

    function previousRetail(retailIndex) {
        if (retailIndex < 0) {
            retailIndex = retails.length - 1;
        }
        setRetail(retails[retailIndex]);
        setRetailIndex(retailIndex);
    }
    function handleRetailBtnClick(event) {
        // Get the title of the clicked button
        const btnName = event.target.getAttribute("data-value");
        if (btnName === "next") {
          const newRetailIndex = retailIndex + 1;
          nextRetail(newRetailIndex);
        } else {
          const newRetailIndex = retailIndex - 1;
          previousRetail(newRetailIndex);
        }
      }
    function loadRetail() {
        API.GetRetail().then(retails => {
            setRetails(retails);
            setRetail(retails[0])
        }).catch(err => console.log(err));
    }
    // Creating the cards to load a list on the home page
    let retailcards;
    if (retails.length > 0 ) {
        // console.log(retails)
        retailcards = retails.map (ret => 
            <div key={ret._id}>
            <Retail companyName={ret.companyName}
            address={ret.address}
            open={ret.open}
            curbside={ret.curbside}
            masks={ret.masks}
            handleRetailBtnClick={handleRetailBtnClick}
            userCreated={ret.userCreated}
            /></div>    
        )
    }
    // Creating the cards to load a list on the home page
    let restaurantcards;
    if (restaurants.length > 0 ) {
        // console.log(restaurants)
        restaurantcards = restaurants.map (rest => 
            <div key={rest._id}>
            <Restaurant companyName={rest.companyName}
            address={rest.address}
            dineIn={rest.dineIn} 
            tables={rest.tables}
            outsideDining={rest.outsideDining} 
            takeOut={rest.takeOut} 
            driveThru={rest.driveThru}
            open={rest.open} 
            masks={rest.masks}
            userCreated={rest.userCreated}
            handleBtnClick={handleBtnClick} />  
        </div>
        )
    }

    return (
        <div>
            <div className="row">
                <HomeImg />
            </div>
            <div className="row">
                <Jumbotron />
            </div>
            <div  className="row justify-content-center">
            <LoadScript
      googleMapsApiKey="AIzaSyBWs77OPf3_03s5yGD-UtwXeR5B5q9TuF8"
    >
                {retailcards}
                {restaurantcards}
                </LoadScript>
             </div>
             {/* <MapContainer />  */}
        </div>
    )
}
export default Home;