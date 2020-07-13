const router = require('express').Router();
const DB = require('../../models');
const passport = require('passport');

router.post("/signup", (req, res) => {
    DB.User.create(req.body).then(dbUser => {
        req.login(dbUser, err => {
            if (err) console.log(err);
        })
        res.json(dbUser);
    }).catch(err => {
    console.log(err.errors[0].message)
    res.status(401).json({error: err.errors[0].message})
});
})