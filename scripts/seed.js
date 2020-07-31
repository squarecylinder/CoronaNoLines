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
        companyName: "Home Depot",
        address: "3355 Steelyard Dr",
        city: "Cleveland",
        state: "OH",
        zip: "44109",
        businessType: "retail",
        open: true,
        curbside: false,
        masks: true,
        userCreated :  moment().format('MMMM Do YYYY')
    },
    {
        consumer: false,
        username: "Seeder8883@gmail.com",
        password: "Awesome8883",
        companyName: "Gondolier Italian Eatery",
        businessType: "restaurant",
        address: "4800 Baseline Road Ste A104",
        city: "Boulder",
        state: "CO",
        zip: "80303",
        dineIn: true,
        tables: 12,
        outsideDining: true,
        takeOut: true,
        driveThru: false,
        masks: true,
        open: true,
        userCreated :  moment().format('MMMM Do YYYY')
    },
    {
      consumer: false,
      username: "YOUmadeITwoohoo!@gmail.com",
      password: "SuperBlooper2",
      companyName: "Lowes",
      address: "45075 Worth Ave",
      city: "California",
      state: "MD",
      zip: "20619",
      businessType: "retail",
      open: true,
      curbside: true,
      masks: true,
      userCreated :  moment().format('MMMM Do YYYY')
  },
  {
      consumer: false,
      username: "YesMomcapandgown@gmail.com",
      password: "SuperOm",
      companyName: "Fazoli",
      businessType: "restaurant",
      address: "5018 1/2 Milan Road",
      city: "Sandusky",
      state: "OH",
      zip: "44870",
      dineIn: true,
      tables: 10,
      outsideDining: false,
      takeOut: true,
      driveThru: true,
      masks: true,
      open: true,
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
        companyName: "Ace Hardware",
        address: "1665 Parsons Ave",
        city: "Columbus",
        state: "OH",
        zip: "43207",
        businessType: "retail",
        open: true,
        curbside: true,
        masks: false,
        userCreated :  moment().format('MMMM Do YYYY')
    },
    {
        consumer: false,
        username: "Seeder23@gmail.com",
        password: "SuperSeed3",
        companyName: "Great NY Noodletown",
        businessType: "restaurant",
        address: "28 Bowery",
        city: "New York",
        state: "NY",
        zip: "10013",
        dineIn: false,
        tables: 25,
        outsideDining: false,
        takeOut: true,
        driveThru: true,
        masks: true,
        open: true,
        userCreated :  moment().format('MMMM Do YYYY')
    },
    {
      consumer: false,
      username: "Seeder20@gmail.com",
      password: "SuperDooper2",
      companyName: "Walmart Supercenter",
      address: "24801 Brookpark Road",
      city: "North Olmsted",
      state: "OH",
      zip: "44070",
      businessType: "retail",
      open: true,
      curbside: false,
      masks: false,
      userCreated :  moment().format('MMMM Do YYYY')
  },
  {
      consumer: false,
      username: "Seeder787@gmail.com",
      password: "SuperWhat3",
      companyName: "Smashburger",
      businessType: "restaurant",
      address: "136 William St Suite 507",
      city: "New York",
      state: "NY",
      zip: "10038",
      dineIn: false,
      tables: 5,
      outsideDining: false,
      takeOut: true,
      driveThru: true,
      masks: true,
      open: true,
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