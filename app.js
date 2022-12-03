const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.DATABASE_URL
const port = 3000

//Connexion à la base de donnée
mongoose.connect(url);
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

//Iniatialiser l'application server
const app = express();
app.use(express.json());

//Importer la route
app.use('/api', require('./routes/routes'));


app.listen(port, () => console.log('Notre app Node is running on :http://localhost:3000'))
