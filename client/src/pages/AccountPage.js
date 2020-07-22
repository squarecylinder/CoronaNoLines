import React, {useEffect, useState } from 'react';
import Restaurant from '../components/RestaurantCard/Restaurant';
import Retail from '../components/RetailCard/Retail';
import Profile from '../components/RestaurantProfile/RestaurantProfile'

function AccountPage() {

    return (
      <div className="container">
          <div>
            <Profile />
          </div>
      </div>
    )
}
export default AccountPage; 