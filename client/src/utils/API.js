const axios = require("axios");

export default {

PostLogin:  (LoginData) => {
return axios.post("/api/login", LoginData)
},

PostSignUp: (SignData) => {
    return axios.post("/api/signup", SignData)
}
}