const mongoose = require('mongoose'); 

const JokeSchema = new mongoose.Schema(
    {
    setup:{
        type: String,
        required:[false,"Setup required."],
        minlength:[3,"Setup must be atleast 10 characters."]
    },
    punchline:{
        type: String,
        required:[false,"punchline required."], 
        minlength:[3,"punchline must be 3 characters"]
    },
    },
    {
        timestamps:true
    }
);

//does plural or singular effect the code here? 
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;