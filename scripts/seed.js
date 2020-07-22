var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectDatabase");

var userSeed = [
    {
    consumer: true,
    username: "ImASeeder",
    email: "Seeder24@gmail.com",
    password: "SuperSeed",
    },
    {
        consumer: false,
        username: "ImASeeder2",
        email: "Seeder25@gmail.com",
        password: "SuperSeed2",
        companyName: "SeedCity",
        address: "12345 Seed Street",
        businessType: "retail"
    },
    {
        consumer: false,
        username: "ImASeeder3",
        email: "Seeder23@gmail.com",
        password: "SuperSeed3",
        companyName: "Seed Town",
        businessType: "restaurant",
        address: "54321 Seed Street",
        dineIn: true,
        tables: 5,
        outsideDining: false,
        takeOut: true,
        driveThru: true,
        masks: true
    }

];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });