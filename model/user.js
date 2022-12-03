const mongoose = require('mongoose');

//Création du modéle (User)
const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('UserData', userSchema)