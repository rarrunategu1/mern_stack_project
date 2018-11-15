const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport'); //will be used fo protected routes

//Post Model
const Post = require('../../models/Post');

//Validation
const validatePostInput = require('../../validation/post');


//@route    GET api/posts/test
//@desc     Tests post route
//@access   Public
router.get('/test', (req, res) => res.json({msg: 'Posts Works'}));

//@route    GET api/posts
//@desc     Get posts  //so that anyone can read posts
//@access   Public
router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404));
})


//@route    POST api/posts
//@desc     Create post
//@access   Private -we don't want just anyone to write a post
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    
    //check validation
    if(!isValid) {
      //If any erros send 400 with erros object
      return res.status(400).json(errors);
    }
    
    const newPost = new Post ({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });
    
    newPost
      .save()
      .then(post => res.json(post));
})
module.exports = router;





