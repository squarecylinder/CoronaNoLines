
import React, {useEffect, useState} from 'react';
import RestaurantProfile from '../components/RestaurantProfile/RestaurantProfile'
import RetailProfile from '../components/RetailProfile/RetailProfile'
import UserProfile from '../components/UserProfile/UserProfile'
import API from '../utils/API';

function AccountPage() {
      
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [consumer, setConsumer] = useState(null);
  const [businessType, setBusinessType] = useState(null);

  useEffect(() => {
    sessionCheck()
})

function sessionCheck() {
    API.SessionCheck().then((res) => {
        if (res.status === 200) {
            setIsLoggedIn(true);
            setConsumer(res.data.consumer)
            if(!consumer){
                setBusinessType(res.data.businessType)
            }
        }
        else {
            console.log("user failed to login");
        }
    })
}
    return (
        <div>
            <div>
                {consumer ? <UserProfile /> : null}
                {businessType === 'restaurant' ? <RestaurantProfile /> : null}
                {businessType === 'retail' ? <RetailProfile /> : null}
            </div>
        </div>
    )
}
export default AccountPage; 