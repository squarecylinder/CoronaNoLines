const router = require('express').Router();
// const loginController
const passport = require('passport');

router.post("/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user)
})

module.exports = router;