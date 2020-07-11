const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerProfileSchema = new Schema({
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

   

    userCreated: {
        type: Date,
        default: Date.now
    }

});

const customerProfile = mongoose.model("customerProfile", customerProfileSchema);

module.exports = customerProfile;