
import React, {useEffect, useState} from 'react';
import RestaurantProfile from '../components/RestaurantProfile/RestaurantProfile'
import RetailProfile from '../components/RetailProfile/RetailProfile'
import UserProfile from '../components/UserProfile/UserProfile'
import API from '../utils/API'

function ListAll() {
      
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [consumer, setConsumer] = useState(null);
  const [businessType, setBusinessType] = useState(null);
  const [businesslist, setBusinessList] = useState([]);
  let businessul;
  
  useEffect(() => {
    sessionCheck()
})
  useEffect(() => {
      getbusinesses()
})

function getbusinesses() {
API.Getallbusinesses()
    .then(res => {
        if(res.status === 200) {
        
        setBusinessList(res.data)
    
    businessul= businesslist.map(business => <li>{business.companyName}</li>)
        }   
    })
}

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
//let businessul= businesslist ? businesslist.map(business => <li>{business.companyName}</li>) : ""
businessul= businesslist.map(business => <li>{business.companyName}</li>)
    return (
        <div>
            <div>
                <ul>{businessul}</ul>
                {consumer ? <UserProfile /> : null}
                {businessType === 'restaurant' ? <RestaurantProfile /> : null}
                {businessType === 'retail' ? <RetailProfile /> : null}
            </div>
        </div>
    )
}
export default ListAll; 