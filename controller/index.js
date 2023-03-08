const File = require('../model/file');
module.exports.home = (req,res) => {
    return res.render('home');
}

module.exports.upload = async (req,res) => {
  
    console.log(req.files);
    var filename = req.files.data.name;
    var index = filename.indexOf('.');
    filename = filename.substring(0,index) + Date.now() + filename.substring(index,filename.length);

    req.files.data.mv(__dirname+'/../uploads/files/'+filename,(err) => {
        if (err) {
            return;
        }else{
            console.log("file added successfully in the folder");
        }
    })

    try{

        await File.create({
            file:filename
        })

        console.log("file added in database");

    }catch(err) {

        console.log("error in saving the data in database",err);
        

    }

  
    return res.redirect('back');

}

module.exports.getFiles = async (req,res) => {

    try{

        var files = await File.find({});
        return res.status(200).json({files});

    }catch(err) {

        console.log("error getting for fetching the files from db",err);
        return res.sendStatus(401);

    }
    


}

module.exports.show_file = (req,res) => {
    console.log(req.params);
    return res.render('file');
}