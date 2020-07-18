import React, {useState, useEffect } from 'react';
// import MapContainer from '../components/Map/Map';
import Retail from '../components/RetailCard/Retail'
import Restaurant from '../components/RestaurantCard/Restaurant'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import API from '../utils/API';
import HomeImg from '../components/HomeImg'


    
//Need to iterate to dynamically generate new cards
function Home(){
    const [restaurant, setRestaurant] = useState({});
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantIndex, setRestaurantIndex] = useState(0);
    const [retail, setRetail] = useState({});
    const [retails, setRetails] = useState([]);
    const [retailIndex, setRetailIndex] = useState(0);
    
     useEffect(() => {
        loadRestaurants();
    }, []);

    useEffect(() => {
        loadRetail();
    }, []);

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
    function loadRestaurants() {
        API.GetRestaurant().then(restaurants => {
            setRestaurants(restaurants);
            setRestaurant(restaurants[0])
        }).catch(err => console.log(err));
    }


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
    return (

        <div className="Container">
            <div className="row">
                <HomeImg />
            </div>

            <div className="row">
            <Jumbotron />
            </div>
            <div  className="row">
                <Retail companyName={retail.companyName}
                    address={retail.address}
                    open={retail.open}
                    curbside={retail.curbside}
                    masks={retail.masks}
                    handleRetailBtnClick={handleRetailBtnClick}
                    userCreated={retail.userCreated}
                />
                {/* <Retail />
                <Retail /> */}
                <Restaurant companyName={restaurant.companyName}
                address={restaurant.address}
                dineIn={restaurant.dineIn} 
                tables={restaurant.tables}
                outsideDining={restaurant.outsideDining} 
                takeOut={restaurant.takeOut} 
                driveThru={restaurant.driveThru}
                open={restaurant.open} 
                masks={restaurant.masks}
                userCreated={restaurant.userCreated}
                handleBtnClick={handleBtnClick} />
                {/* <Restaurant />
                <Restaurant /> */}
             </div>
             {/* <MapContainer /> */}
        </div>
    )
}
export default Home