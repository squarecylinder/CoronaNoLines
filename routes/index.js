const path = require("path");
const DB = require("../models")
const router = require("express").Router();
const {signup, login, restaurant, retail, users, sessioncheck} = require("./api/index.js");

// API Routes
router.use("/api", signup, login, restaurant, retail, users, sessioncheck);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
