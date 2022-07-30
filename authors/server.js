//IMPORTS
const express = require('express');
const app = express();
const cors = require('cors')

//CORS
app.use(cors())
//EXPRESS
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true }));
//MONGOOSE ROUTE FILE
require('./server/routes/author.routes')(app);
//MONGOOSE CONFIGURE FILE
require('./server/config/mongoose.config');


const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`) );