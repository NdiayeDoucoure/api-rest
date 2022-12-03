const express = require('express');
const Model = require('../model/user');

const router = express.Router()

//Méthode POST
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Méthode GET (All)
router.get('/getAll', async (req, res) => {
    try{
        const allData = await Model.find();
        res.json(allData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Méthode GET (Id)
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Méthode UPDATE (Id)
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Méthode DELETE (Id)
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const _data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${_data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;