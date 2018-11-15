const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    avatar: {
        type: String
    },
    likes: [
        {
            user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
                
            }
        }
    ],
    comments: 
    [
        {
            user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
            },
            text: {
              type: String,
              required: true
            },
            name: { //name and avatar will be used to save their name and avatar on any comments they made on posts that could valuable that we dont want deleted if they delete their account
              type: String
            },
            avatar: {
              type: String
            },
            date: {
              type: Date,
              default: Date.now
            }
        }
    ],
    
     date: {
              type: Date,
              default: Date.now
            }
});

module.exports = Post = mongoose.model('post', PostSchema)



