//STEP 1: IMPORT MONGOOSE
const mongoose = require('mongoose');

//STEP 2: DECLARE AND CREATE YOUR ONW SCHEMA 
const PetSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:[true,"Name is required."],
        minLength:[3,"Must be at least 3 characters"]
    },
    petType:{
        type:String, 
        required:[true,"petType is required."],
        minLength:[3,"Must be at least 3 characters"]
    }, 
    description:{
        type:String, 
        required:[true,"description is required"],
        minLength:[3,"Must be at least 3 characters"]
    },
    skills:[String]
}, {timestamp:true})

//STEP 3: EXPORT THE MODEL
module.exports.Pet = mongoose.model('Pet', PetSchema);