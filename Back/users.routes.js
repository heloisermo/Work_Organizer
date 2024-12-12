const express = require('express');
const users = require('./users.js');
const router = express.Router(); 
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

router.get('/list', async (req, res) => {
    const userlist = await users.list();
        res.json(userlist);
    });

router.post('/create', jsonParser, async (req, res)=> {

    const { email, password } = req.body;  // Récupère les données envoyées dans le body de la requête
    if (!email || !password) {
        return res.json({ message: 'Email et mot de passe sont requis' });  // Retourne un message si pas de données
    }
    
    const newUser = await users.post(email, password);  // Crée un nouvel utilisateur
    res.json(newUser);  // Renvoie l'utilisateur créé (avec l'ID généré)
});


router.get('/:email', async (req, res) => {
    const { email } = req.params;  // Récupère l'email de l'utilisateur à partir des paramètres de l'URL
    
    const user = await users.get(email);  // Recherche l'utilisateur par email
    if (user) {
        return res.json(user);  // Renvoie l'utilisateur trouvé
    } else {
        return res.json({ message: 'Utilisateur non trouvé' });  // Si l'utilisateur n'existe pas
    }
});

module.exports = router;
