var mongoose = require("mongoose");
var db = require("../models");
const moment = require("moment");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectDatabase");

var userSeed = [
  {
    consumer: true,
    username: "yayCongratulationsToFullstackGraduates@gmail.com",
    password: "SuperCongrats!",
    userCreated :  moment().format('MMMM Do YYYY')
    },
    {
        consumer: false,
        username: "Seednothing333@gmail.com",
        password: "Super3332",
        companyName: "Seed333",
        address: "12345 Three Street",
        city: "San Francisco",
        state: "CA",
        zip: "12345",
        businessType: "retail",
        userCreated :  moment().format('MMMM Do YYYY')
    },
    {
        consumer: false,
        username: "Seeder8883@gmail.com",
        password: "Awesome8883",
        companyName: "Seed Town",
        businessType: "restaurant",
        address: "54321 Awesome Street",
        city: "San Dee Dee",
        state: "CA",
        zip: "12345",
        dineIn: true,
        tables: 5,
        outsideDining: false,
        takeOut: true,
        driveThru: true,
        masks: true,
        userCreated :  moment().format('MMMM Do YYYY')
    },
    {
      consumer: false,
      username: "YOUmadeITwoohoo!@gmail.com",
      password: "SuperBlooper2",
      companyName: "SeedDees",
      address: "12345 Dees Street",
      city: "San Dude",
      state: "CA",
      zip: "12345",
      businessType: "retail",
      userCreated :  moment().format('MMMM Do YYYY')
  },
  {
      consumer: false,
      username: "YesMomcapandgown@gmail.com",
      password: "SuperOm",
      companyName: "Seed Goo",
      businessType: "restaurant",
      address: "54321 Good Street",
      city: "San Goo",
      state: "CA",
      zip: "12345",
      dineIn: true,
      tables: 5,
      outsideDining: false,
      takeOut: true,
      driveThru: true,
      masks: true,
      userCreated :  moment().format('MMMM Do YYYY')
    },
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
    },
    {
      consumer: false,
      username: "Seeder20@gmail.com",
      password: "SuperDooper2",
      companyName: "SeedBees",
      address: "12345 Bees Street",
      city: "San Dude",
      state: "CA",
      zip: "12345",
      businessType: "retail",
      userCreated :  moment().format('MMMM Do YYYY')
  },
  {
      consumer: false,
      username: "Seeder787@gmail.com",
      password: "SuperWhat3",
      companyName: "Seed Mow",
      businessType: "restaurant",
      address: "54321 Food Street",
      city: "San Goo",
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