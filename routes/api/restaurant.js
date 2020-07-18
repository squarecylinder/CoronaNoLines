const router = require('express').Router();
const DB = require('../../models');

router.get("/restaurant", (req, res) => {
    DB.User.find(
        {businessType: "restaurant"}
        ).then(dbRestaurant => {
        res.json(dbRestaurant)
        console.log(dbRestaurant)
    })
});
module.exports = router;
