const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const businessProfileSchema = new Schema({
    username: {
        type: string,
        trim: true,
        required: "Username is Required"
    },

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },

    companyName: {
        type: string,
        trim: true,
        required: "Company Name is Required"
    },


    businessType: {
        type: string,
        trim: true,
        required: "Business type is Required"

    },

    address: {
        type: string,
        trim: true,
        required: "Address is Required"

    },

    dineIn: {
        type: Boolean,
        default: false

    },

    tables: {
        type: number,
        min: 1
    },

    outsideDining: {
        type: Boolean,
        default: false
    },


    takeOut: {
        type: Boolean,
        default: false

    },

    driveThru: {
        type: Boolean,
        default: false

    },


    masks: {
        type: Boolean,
        default: false

    },

    userCreated: {
        type: Date,
        default: Date.now
    }

});

const businessProfile = mongoose.model("profile", businessProfileSchema);

module.exports = businessProfile;