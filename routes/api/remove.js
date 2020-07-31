const router = require('express').Router();
const DB = require('../../models');

router.get('/remove', (req, res) => {
    console.log(req, "in the backend")
    if (!req.user) {
        res.status(401);
    }
    else {
        DB.User.findOneAndDelete({_id: req.user._id})
        .then((user) => {
            res.json(user)
        })
    }
})
module.exports = router;