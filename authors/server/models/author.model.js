//STEP 1: IMPORT MONGOOSE 
const mongoose = require('mongoose');

//STEP 2: DECLARE AND CREATE YOUR SCHEMA USING THE SCHEMA FUNCTION
const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[ 
            true,
            "Name is required"
        ],
        minLength:3
    }
}, {timestamps:true});

//STEP 3: EXPORT THE MODEL
module.exports.Author = mongoose.model('Author', AuthorSchema);