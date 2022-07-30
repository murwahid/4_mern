//IMPORTS
const express = require('express');
const app = express();
const cors = require('cors');

//FILE: ROUTES
require('./server/routes/pet.routes')(app);

//FILE:SERVER
require('./server/config/mongoose.config');

//VARIABLES
const port = 8000;


//IMPORT.CORS
app.use(cors());

//EXPRESS
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true }));



app.listen(port,()=>console.log(`Listening on port: ${port}`))
