const router = require('express').Router();
const passport = require('passport');

router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log("login successful")
    res.json(req.user)
    console.log(req.user)
})

module.exports = router;