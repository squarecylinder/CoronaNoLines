var mongoose = require("mongoose");
var db = require("../models");
const moment = require("moment");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectDatabase");

var userSeed = [
    {
    consumer: true,
    username: "Seeder24@gmail.com",
    password: "SuperSeed",
    userCreated :  moment().format('MMMM Do YYYY')
    },
    {
        consumer: false,
        username: "Seeder25@gmail.com",
        password: "SuperSeed2",
        companyName: "SeedCity",
        address: "12345 Seed Street",
        city: "San Francisco",
        state: "CA",
        zip: "12345",
        businessType: "retail",
        userCreated :  moment().format('MMMM Do YYYY')
    },
    {
        consumer: false,
        username: "Seeder23@gmail.com",
        password: "SuperSeed3",
        companyName: "Seed Town",
        businessType: "restaurant",
        address: "54321 Seed Street",
        city: "San Francisco",
        state: "CA",
        zip: "12345",
        dineIn: true,
        tables: 5,
        outsideDining: false,
        takeOut: true,
        driveThru: true,
        masks: true,
        userCreated :  moment().format('MMMM Do YYYY')
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