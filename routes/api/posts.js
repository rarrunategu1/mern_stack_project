const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport'); //will be used fo protected routes


//@route    GET api/posts/test
//@desc     Tests post route
//@access   Public
router.get('/test', (req, res) => res.json({msg: 'Posts Works'}));


module.exports = router;