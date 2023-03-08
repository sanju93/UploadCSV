const express = require('express');
const router = express.Router();
const Home_Controller = require('../controller/index');

router.get('/',Home_Controller.home);
router.post('/upload',Home_Controller.upload);
router.get('/getting_files',Home_Controller.getFiles);
router.get('/show_file/:filename',Home_Controller.show_file);

module.exports = router;