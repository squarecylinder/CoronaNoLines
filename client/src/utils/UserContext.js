import React from 'react';
// creating a Context that hold user information to change viewing experience
const UserContext = React.createContext({
    name: "null",
    userType: "null",
    theme : "null",
})

export default UserContext;