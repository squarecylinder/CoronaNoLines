var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectDatabase");

var userSeed = [
    {
    consumer: true,
    username: "I'mASeeder",
    email: "Seeder24@gmail.com",
    password: "SuperSeed",
    },
    {
        consumer: true,
        username: "I'mASeeder2",
        email: "Seeder25@gmail.com",
        password: "SuperSeed2",
        companyName: "SeedCity",
        address: "12345 Seed Street",
        businessType: "retail"
    },
    {
        consumer: true,
        username: "I'mASeeder2",
        email: "Seeder25@gmail.com",
        password: "SuperSeed2",
        companyName: "SeedCity",
        businessType: "resturant",
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