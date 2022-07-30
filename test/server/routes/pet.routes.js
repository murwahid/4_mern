//IMPORT THE CONTROLLER
const PetController = require('../controllers/pet.controller');

module.exports = function(app){
    app.get('/api', PetController.index);
    app.post('/api/pet/new',PetController.createPet);
    app.get('/api/pet',PetController.getAllPets);
    app.get('/api/pet/:id',PetController.getOnePet);
    app.patch('/api/edit/:id',PetController.updatePet);
    app.delete('/api/delete/:id',PetController.deletePet);
    app.put('/api/pet/:id/addSkills',PetController.addSkills);
}