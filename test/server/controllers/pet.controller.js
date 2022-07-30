const { Pet } = require('../models/pet.model');
module.exports.index = (request,response) => {
    response.json({
        message:"Hello World!"
    });
}

//CREATE
module.exports.createPet = (request,response) => {
    const {name, petType, description, skills} = request.body;
    Pet.create({
        name,
        petType,
        description,
        skills
    })
    .then(pet=> response.json(pet))
    .catch(err=>response.json(err))
}

//ADD.SKILLS 
module.exports.addSkills = (request,response) => {
    Pet.updateOne({_id:request.params._id},{$push:{skills:request.body.skills}})
    .then(results=> response.json(results))
    .catch(err=>console.log(err))
}

//READ.ALL
module.exports.getAllPets = (request,response) => {
    Pet.find({})
    .then(Pets => response.json(Pets))
    .catch(err=>response.json(err));
}

//READ.ONE
module.exports.getOnePet = (request,response) =>{
    Pet.findOne({_id:request.params.id})
    .then(pet => response.json(pet))
    .catch(err=>response.json(err))
}

//UPDATE
module.exports.updatePet = (request,response) => {
    Pet.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    .then(updatedPet => response.json(updatedPet))
    .catch(err=>response.json(err))
}

//DELETE 
module.exports.deletePet = (request,response) => {
    Pet.deleteOne({_id:request.params.id})
    .then(Pet=> response.json(Pet))
    .catch(err=>response.json(err))
}
