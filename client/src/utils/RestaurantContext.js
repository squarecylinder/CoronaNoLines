import React from 'react';

const RestaurantContext = React.createContext({
    companyName: '',
    address: '',
    dineIn: '', 
    tables: '', 
    outsideDining: '', 
    takeOut: '',
    driveThru: '',
    curbside: '',
    open: '', 
    masks: ''
});

export default RestaurantContext
// address: ""
// companyName: ""
// curbside: ""
// dineIn: ""
// driveThru: ""
// masks: ""
// open: ""
// outsideDining: ""
// tables: ""
// takeOut: ""