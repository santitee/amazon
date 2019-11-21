const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express()

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
    console.log(req.body.name);
})

app.listen(3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening in PORT", 3000);
    }
});