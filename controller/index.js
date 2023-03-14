const File = require('../model/file');
const Data = require('../model/data');
const csv = require('csvtojson');

// home page
module.exports.home = (req,res) => {
    return res.render('home');
}

// upload file
module.exports.upload = async (req,res) => {
  
 
    var filename = req.files.data.name;
    var index = filename.indexOf('.');
    filename = filename.substring(0,index) + Date.now() + filename.substring(index,filename.length);

    req.files.data.mv(__dirname+'/../uploads/files/'+filename,async (err) => {
        if (err) {
            return;
        }else{
            
        const filePath = __dirname + '/../uploads/files/' + filename;
       csv()
        .fromFile(filePath)
        .then(async (results) => { 

            try{
                
                   
               const data = await Data.create({
                    data : results
                });

               await File.create({
                    file : filename,
                    data : data._id
                })


            

            }catch(err) {

                console.log("error occuring while creating the database",err);
                

            }

       





        });
    

     

            console.log("file added successfully in the folder");
        }
    })

    


 

  
    return res.redirect('back');

}
// get files
module.exports.getFiles = async (req,res) => {

    try{

        var files = await File.find({});
        return res.status(200).json({files});

    }catch(err) {

        console.log("error getting for fetching the files from db",err);
        return res.sendStatus(401);

    }
    


}


// show files
module.exports.show_file = async (req,res) => {
    

    var file = await File.findOne({file : req.params.filename});
    var page = req.query.page;
    var limit = 100;
 

    var data_Id = file.data;
    var data = await Data.findById(data_Id);

    var csv_data = data.data;

    if (csv_data.length >= limit) {
        var startIndex = (page - 1) * limit;
        var lastIndex = page * limit;

        var changeArray = csv_data.slice(startIndex,lastIndex);
        return res.render('file',{
            file : changeArray,
            totalPages : Math.ceil(csv_data.length / limit)
        })
    }else{
        return res.render('file',{
            file : csv_data,
            totalPages : 0
        })
    }

    



   

        

       
      
     
 
   
}