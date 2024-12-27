const express = require('express');
const tasks = require('./tasks.js');
const router = express.Router(); 
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

router.get('/list', async (req, res) => {
    const tasklist = await tasks.list();
        res.json(tasklist);
    });

router.post('/create', jsonParser, async (req, res) => {
    try {
        const { contenu, date, id_client } = req.body;
        const newTask = await tasks.create_task(contenu, date, id_client);
        res.status(201).json(newTask); 
    } catch (error) {
        console.error('Erreur lors de la création de la tâche :', error);
        res.status(500).json({ error: 'Erreur lors de la création de la tâche 2' });
    }
});
    

module.exports = router;