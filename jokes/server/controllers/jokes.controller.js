const Joke = require("../models/jokes.models");

//ALL JOKES
module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => res.json({jokes:allJokes}))
        .catch(err=>res.json({message:'Something went wrong', error:err}))
}

//SINGLE JOKE
// module.exports.findOneSingleJoke = (res,req) => {
//     Joke.findById({_id:req.params.id})
//         .then(oneSingleJoke => res.json({joke: oneSingleJoke}))
//         .catch(err=> res.json({message:'Something went wrong', error:err})); 
// }

module.exports.findOneJoke = (req,res)=>{
    Joke.findOne({_id: req.params.id})
        .then(oneJoke =>{
            res.json({results: oneJoke})
        })
        .catch(err=>res.json({message:"something went wrong", error:err}))
}



// //CREATE NEW JOKE
// module.exports.createNewJoke = (res, req) => {
//     Joke.create(req.body)
//         .then((newlyCreatedJoke) => {res.json({joke:newlyCreatedJoke})})
//         .catch((err) => res.json(err))
// }

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((joke) => {
        res.json({ results: joke });
    })
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};
//update existing joke
module.exports.updateExistingJoke = (res,req) => {
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body, 
        {new:true, runValidators:true}
    )
        .then(updatedJoke => res.json({joke:updatedJoke}))
        .catch(err => res.json({message:"Something went wrong", error:err}));
}

//DELETE
module.exports.deleteAnExistingJoke = (res,req) => {
    Joke.deleteOne({_id:req.params.id})
        .then(result=>res.json({result:result}))
        .catch(err=>res.json({message:"Something went wrong", error:err}))
}