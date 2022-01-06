const express = require('express');
const router = express.Router();
const User = require("../models/user");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const db = "mongodb+srv://vandecastro:Vsauce321@cluster0.kna29.mongodb.net/eventsDB?retryWrites=true&w=majority"
const axios = require('axios');

mongoose.connect(db, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to mongoDB')
    }
})

router.get('/', (req, res) => {
    res.send('From API route')
});

router.post('/register', (req, res) => {
    let userData = req.body;
    console.log(userData)
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretkey');
            res.status(200).send({ token })
        }
    })

})

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password')
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretkey');
                    res.status(200).send({ token })
                }
            }
        }
    })
})

router.get('/events', (req, res) => {
    try {
        axios.get('https://random-data-api.com/api/restaurant/random_restaurant?size=10').then((response) => {
            res.status(200).send(response.data)
        }).catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router;