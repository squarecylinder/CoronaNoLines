const { default: Axios } = require("axios");

export default {

PostLogin:  (LoginData) => {
return Axios.post("/api/login", LoginData)
},

PostSignUp: (SignData) => {
    return Axios.post("/api/signup", SignData)
}
}