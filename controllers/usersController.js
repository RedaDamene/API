const express = require('express');
const router = express.Router();

const { UserModel } = require('../models/userModel');

router.get('/', (req, res) => {
    UserModel.find((err, doc) => {
        if(!err) res.send(doc);
        else console.log("Error to get data" + err);
    })
})
module.exports = router;