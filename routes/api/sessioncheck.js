const router = require('express').Router();
const DB = require('../../models');

router.get('/sessioncheck', (req, res) => {
    if (!req.user) {
        res.status(401);
    }
    else {
        DB.User.findOne({_id: req.user._id})
        .then((user) => {
            res.json(user)
        })
    }
})

module.exports = router;