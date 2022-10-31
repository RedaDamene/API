const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { UserModel } = require('../models/userModel');

router.get('/', (req, res) => {
    UserModel.find((err, doc) => {
        if(!err) res.send(doc);
        else console.log("Error to get data" + err);
    })
});

router.post('/', (req, res) => {
    const newRecord = new UserModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        country: req.body.country
    });

    newRecord.save((err, doc) => {
        if(!err) res.send(doc);
        else console.log("Error to post data" + err);
    })
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send("ID unknow : " + req.params.id);
    }

    const updateRecord = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        country: req.body.country
    };

    UserModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord},
        { new: true},
        (err,doc) => {
            if(!err) res.send(doc);
            else console.log("Update error : " + err);
        }
    )
});

router.delete('/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send("ID unknow : " + req.params.id);
    }
    UserModel.findByIdAndRemove(
        req.params.id,
        (err, doc) => {
            if (!err) res.send(doc);
            else console.log("Delete error : " + err);
        }
    );
});

module.exports = router;