const router = require('express').Router();
const DB = require('../../models');

router.get("/users", (req, res) => {
    DB.User.find({}).then(dbUsers => {
        res.json(dbUsers)
    })
});
module.exports = router;