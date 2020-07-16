const router = require('express').Router();
const DB = require('../../models');
const passport = require('passport');

router.post("/signup", (req, res) => {
    console.log("in the backend")
    DB.User.create(req.body).then(dbUser => {
        req.login(dbUser, err => {
            if (err) console.log(err);
        })
    });
})
module.exports = router;