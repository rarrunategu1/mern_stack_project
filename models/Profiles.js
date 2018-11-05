const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
   user: {
       type: Schema.Types.ObjectId, //will associate the user by it's id
       ref: 'users' //references to collection
   },
   handle: {
       type: String,
       required: true,
       max: 40
   },
   company: {
       type: String
   },
   website: {
       type: String
   },
   location: {
       type: String
   },
   status: {
       type: String,
       required: true //we are making this required because we want to know where in their career the user is
   },
   skills: {
       type: [String] //will be an array because the comma seperated values the user inputs ex. html, css, java will then be returned in an array to save to database
   },
   bio: {
       type: String,
   },
   githubusername: {
       type: String
   },
   experience: [
      {
         title: {
            type:String,
            required: true
      },
      company: {
          type: String,
          required: true
      },
      location: {
          type: String,
      },
      from: {
          type: Date,
          required: true
      },
      to: {
          type: Date //we don't want to make this required in case they are still working there
      },
      current: {
          type: Boolean, //in case they're currently working there
          default: false
      },
      description: {
          type: String
      }
      }
    ],
    education: [
      {
         school: {
            type:String,
            required: true
      },
      degree: {
          type: String,
          required: true
      },
      fieldOfStudy: {
          type: String,
          required: true
      },
      from: {
          type: Date,
          required: true
      },
      to: {
          type: Date //we don't want to make this required in case they are still working there
      },
      current: {
          type: Boolean, //in case they're currently working there
          default: false
      },
      description: {
          type: String
      }
      }
    ],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);


