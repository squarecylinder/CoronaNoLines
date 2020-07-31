const router = require('express').Router();
router.get("/logout", function (req, res) {
    console.log("===================================")
    console.log("[Log Out - 142]")
    console.log("===================================")
    req.logout();
    res.json({ message: "Logging out" });
  });
  module.exports = router;