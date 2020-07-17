const router = require('express').Router();
const DB = require('../../models');

router.post("/signup", (req, res) => {
    DB.User.create(req.body).then(dbUser => {
        req.login(dbUser, err => {
            if (err) console.log(err);
        })
    });
})
module.exports = router;