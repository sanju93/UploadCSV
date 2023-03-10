const mongoose = require('mongoose');
// const multer = require('multer');

const fileSchema = new mongoose.Schema({
    file : {
        type : String,
        require : true
    },
    data : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Data'
    }
});



const File = mongoose.model('File',fileSchema);
module.exports = File;