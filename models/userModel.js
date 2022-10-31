const mongoose = require("mongoose");

const UserModel = mongoose.model(
    "node-api",
    {
        author: {
            type: String, 
            required: true
        },
        message: {
            type: String, 
            required: true
        },
        date:{
            type: Date,
            default: Date.now
        }
    },
    "users"
);

module.exports = { UserModel };