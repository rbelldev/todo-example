const express = require("express");
const corsSettings = require('./src/configuration/cors');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(corsSettings);

app.listen(process.env.PORT);

module.exports = app;