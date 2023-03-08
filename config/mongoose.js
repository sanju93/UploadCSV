const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect('mongodb://localhost/CSV_File')
.then(
    () => {
        console.log("Database connected succesfully");
    },
    (err) => {
        console.log("Error occuring while database connection!",err);
    }
)