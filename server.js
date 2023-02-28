const mongoose = require("mongoose");
const express = require("express");
const app = express();

const port = 8081;
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
    "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With Content-Type, Accept");
    next();
});

var mongoDB = "mongodb://127.0.0.1/censusdb";

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB failed to connect'));
db.on('connected', console.log.bind(console, 'MongoDB connected successfully'));

app.use(express.json());
app.use('/api', require('./route/request'));

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});

module.exports = app;