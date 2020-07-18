const router = require('express').Router();
const DB = require('../../models');

router.get("/retail", (req, res) => {
    DB.User.find(
        {businessType: "retail"}
        ).then(dbRetail => {
        res.json(dbRetail)
        // console.log(dbRetail)
    })
});
module.exports = router;