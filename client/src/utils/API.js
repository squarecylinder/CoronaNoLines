const { default: Axios } = require("axios");

export default {

PostLogin:  (LoginData) => {
return Axios.post("/api/login", LoginData)
}

}