const mongoose = require("mongoose");

var mongoDB= 'mongo://127.0.0.1/censusdb';

mongoose.connect(mongoDB, {userNewUrlParser: true, userUnifiedTopology:true});

var db = mongoose.connection;