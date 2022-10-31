const mongoose = require("mongoose");

const UserModel = mongoose.model(
    "node-api",
    {
        firstname: {
            type: String, 
            required: true
        },
        lastname: {
            type: String, 
            required: true
        },
        age:{
            type: Number,
            default: true
        },
        country: {
            type: String,
            required: true
        }
    },
    "users"
);

module.exports = { UserModel };