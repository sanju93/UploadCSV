const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery',false);

mongoose.connect(process.env.MongodbUrl)
.then(
    () => {
        console.log("Database connected succesfully");
    },
    (err) => {
        console.log("Error occuring while database connection!",err);
    }
)