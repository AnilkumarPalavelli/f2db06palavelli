var express = require('express');
const fish_controlers= require('../controllers/fish');
var router = express.Router();

/* GET home page. */
router.get('/', fish_controlers.fish_view_all_Page);
/* GET detail fish page */
router.get('/detail', fish_controlers.fish_view_one_Page);
module.exports = router;
