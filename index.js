const express = require('express');
const app = express();
const port = 8000;
const routes = require('./routes/index');
const express_ejs_layout = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
require('./config/mongoose');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express_ejs_layout);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(express.static('./assets'));
app.use(fileUpload());
app.use('/',routes);

app.listen(port,(err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("server connected successfully");
})