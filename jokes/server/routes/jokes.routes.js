const JokeController = require('../controllers/jokes.controller');


module.exports = app => {
    app.get('/api/Jokes', JokeController.findAllJokes);
    app.get('/api/Jokes/:id', JokeController.findOneJoke);
    // app.put('/api/Jokes/:id', JokeController.updateExistingJoke);
    // app.get('/api/Jokes/random', JokeController.) // <=Get a random joke
    app.post('/api/Jokes/new', JokeController.createJoke);
    app.delete('/api/Jokes/delete/:id', JokeController.deleteAnExistingJoke);
}