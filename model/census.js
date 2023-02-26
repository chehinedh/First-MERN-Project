const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CSchema = new Schema ({

    city: {
        type: String,
        required:[true, 'city-state field resuired']
    },
    census: {
        type: Number,
        require:[true, 'census required']
    }

});

const Census = mongoose.model('census', CSchema, "census");

module.exports = Census;