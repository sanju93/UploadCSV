const mongoose = require('mongoose');
// const multer = require('multer');

const fileSchema = new mongoose.Schema({
    file : {
        type : String,
        require : true
    }
});

// const upload = multer.diskStorage({
//     destination : function(req,file,cb) {
//         cb(null,__dirname + '/../uploads/files');
//     },
//     filename : function (req,file,cb){
//         cb(null,file.originalname + '-' + Date.now())

//     }
// })

const File = mongoose.model('File',fileSchema);
module.exports = File;