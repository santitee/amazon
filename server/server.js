const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const User = require("./models/user");

const app = express();

mongoose.connect(
    process.env.DATABASE, 
    { useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to the database");
        }
    }
);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Get - Retrieve data from server
app.get("/",  (req, res) => {
    res.json("Hello amazon clone");
 });

// POST - send data frome frontend to backend
app.post("/", (req, res) => {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(err => {
        if (err) {
            res.json(err);
        } else {
            res.json("successfully saved");
        }
    });
});

app.listen(3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening in PORT", 3000);
    }
});