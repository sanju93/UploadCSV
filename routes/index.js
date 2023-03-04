const express = require('express');
const router = express.Router();
const Home_Controller = require('../controller/index');

router.get('/',Home_Controller.home);

module.exports = router;