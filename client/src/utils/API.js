const axios = require("axios");

export default {

PostLogin:  (LoginData) => {
    return axios.post("/api/login", LoginData)
    },

PostSignUp: (SignData) => {
    return axios.post("/api/signup", SignData)
    },
SessionCheck: () => {
    return axios.get('/api/sessioncheck')
},
Getallbusinesses: () => {
    return axios.get('/api/users')
},
Update: (UpdateData) => {
    console.log(UpdateData)
    return axios.put('/api/update' , UpdateData)
},
Remove: () => {
    return axios.get('/api/remove')
},
Logout: () => {
    return axios.get('/api/logout')
},

GetRestaurant: () => {
    return axios.get("/api/restaurant").then((res) => {
        const restaurants = res.data;
        return restaurants.map( restaurant => {
            return {
                companyName: restaurant.companyName,
                address: restaurant.address,
                dineIn: restaurant.dineIn, 
                tables: restaurant.tables,
                outsideDining: restaurant.outsideDining, 
                takeOut: restaurant.takeOut, 
                driveThru: restaurant.driveThru, 
                curbside: restaurant.curbside, 
                open: restaurant.open, 
                masks: restaurant.masks,
                userCreated: restaurant.userCreated
             }
         })
        })
    },
GetRetail: () => {
    return axios.get("/api/retail").then((res) => {
        const retailStores = res.data;
        return retailStores.map( retail => {
            return {
                address: retail.address,
                companyName: retail.companyName,
                open: retail.open,
                curbside: retail.curbside,
                masks: retail.masks,
                userCreated: retail.userCreated
                }
            })
        })
    }
}
