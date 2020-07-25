const router = require('express').Router();
const DB = require('../../models');

router.put('/update', (req, res) => {
    if (!req.user) {
        res.status(401);
    }
    else {
        DB.User.findByIdAndUpdate({_id: req.user._id},
            {username: req.user.username, 
            password: req.user.password,  
            consumer: req.user.accountType, 
            companyName: req.user.companyName, 
            businessType: req.user.businessType,
            address: req.user.address,
            city: req.user.city,
            state: req.user.state,
            zip: req.user.zip,
            dineIn: req.user.dineIn, 
            tables: req.user.table, 
            outsideDining: req.user.outsideDining, 
            takeOut: req.user.takeOut,
            driveThru: req.user.driveThru,
            curbside:req.user. curbside,
            open: req.user.open, 
            masks: req.user.masks}, omitUndefined=true)
    }
})