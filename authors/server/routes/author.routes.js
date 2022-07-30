//import your controller
const AuthorController = require("../controllers/author.controller");

module.exports = function(app) {
    app.get('/api', AuthorController.index);
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author', AuthorController.getAllAuthors);
    app.patch('/api/edit/:id', AuthorController.updateAuthor);
    app.get('/api/author/:id',AuthorController.getOneAuthor);
    app.delete('/api/delete/:id', AuthorController.deleteAuthor);
}