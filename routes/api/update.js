const router = require('express').Router();
const DB = require('../../models');

router.put('/update', (req, res) => {
    if (!req.user) {
        res.status(401);
    }
    else {
        console.log(req.user._id , req.body.username)
        DB.User.findByIdAndUpdate(req.user._id,
            {username: req.body.username, 
            password: req.body.password,  
            consumer: req.body.accountType, 
            companyName: req.body.companyName, 
            businessType: req.body.businessType,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            dineIn: req.body.dineIn, 
            tables: req.body.table, 
            outsideDining: req.body.outsideDining, 
            takeOut: req.body.takeOut,
            driveThru: req.body.driveThru,
            curbside:req.body. curbside,
            open: req.body.open, 
            masks: req.body.masks}, {omitUndefined: true, new: true}, (err, done) => {
                console.log(done)
                if (err) throw err;
                res.json(done)
            })
    }
})
module.exports = router;