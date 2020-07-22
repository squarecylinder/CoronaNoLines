import React from 'react';
import RestaurantProfile from '../components/RestaurantProfile/RestaurantProfile'
import RetailProfile from '../components/RetailProfile/RetailProfile'
import UserProfile from '../components/UserProfile/UserProfile'

function AccountPage() {

    return (

        <div>
            <div>
                <RestaurantProfile />
                <RetailProfile />
                <UserProfile />
            </div>
        </div>
    )
}
export default AccountPage; 