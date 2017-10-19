const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const canary = require('./api/canary.js');
let router = express.Router();

//config
const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/canary', canary);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.status(200).send("Invalid page");
});


module.exports = app;