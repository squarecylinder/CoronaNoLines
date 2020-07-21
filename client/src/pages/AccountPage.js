import React, { useState } from 'react';
import Restaurant from '../components/RestaurantCard/Restaurant';
import Retail from '../components/RetailCard/Retail';
import Profile from '../components/RestaurantProfile/RestaurantProfile'

function AccountPage() {
    const [editing, setediting] = useState (false)
    const [isrestaurant,setrestaurant] = useState (true)
    function handleeditclick () {
        setediting(true)
    }
    function save () {
        setediting(false)
    }
    let renderCard;
    let business;
if(isrestaurant) {
    business = <Restaurant />
}
else{
    business = <Retail />

}
if(editing) {
    renderCard = <form><button onClick = {save}>save detail</button></form>
}
else{ 
    renderCard =     <div>
        {
            business
        }
   
    <button onClick = {handleeditclick}>Edit Restaurant Information</button>
</div>
}
    return (

       
        


        <div className="container">
             <div>
            <Profile />
        </div>
{
    renderCard
}
        </div>
    )
}
export default AccountPage; 