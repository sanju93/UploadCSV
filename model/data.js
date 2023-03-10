const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({

    data : {
        type : []
    }
})

const Data = mongoose.model('Data',dataSchema);
module.exports = Data;