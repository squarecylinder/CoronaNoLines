
import React, {useEffect, useState} from 'react';
import RestaurantProfile from '../components/RestaurantProfile/RestaurantProfile'
import RetailProfile from '../components/RetailProfile/RetailProfile'
import UserProfile from '../components/UserProfile/UserProfile'
import API from '../utils/API';

function AccountPage() {
      
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [consumer, setConsumer] = useState(null);
  const [businessType, setBusinessType] = useState(null);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [companyName, setCompanyName] = useState();
  const [open, setOpen] = useState();
  const [address, setAddress] = useState();
  const [masks, setMasks] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [dineIn, setDineIn] = useState();
  const [table, setTable] = useState();
  const [outsideDining, setOutsideDining] = useState();
  const [takeOut, setTakeOut] = useState();
  const [driveThru, setDriveThru] = useState();
  const [curbside, setCurbside] = useState();


  useEffect(() => {
    sessionCheck()
})

function sessionCheck() {
    API.SessionCheck().then((res) => {
        if (res.status === 200) {
            setIsLoggedIn(true);
            setConsumer(res.data.consumer)
            setEmail(res.data.username)
            setPassword(res.data.password)
            if(!consumer){
                setBusinessType(res.data.businessType)
                setEmail(res.data.username)
                setPassword(res.data.password)
                setCompanyName(res.data.companyName)
                setAddress(res.data.address)
                setCity(res.data.city)
                setState(res.data.state)
                setZip(res.data.zip)
                setOpen(res.data.open)
                setMasks(res.data.masks)
                setCurbside(res.data.curbside)
                setDriveThru(res.data.driveThru)
                setDineIn(res.data.dineIn)
                setTable(res.data.table)
                setTakeOut(res.data.takeOut)
                setOutsideDining(res.data.outsideDining)
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
                {consumer ? <UserProfile email={email} password={password}/> : null}
                {businessType === 'restaurant' ? <RestaurantProfile /> : null}
                {businessType === 'retail' ? <RetailProfile email={email} password={password} companyName={companyName} open={open} address={address} city={city} state={state} zip={zip} masks={masks} curbside={curbside} /> : null}
            </div>
        </div>
    )
}
export default AccountPage; 