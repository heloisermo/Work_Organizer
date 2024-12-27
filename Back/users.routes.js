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

    const { email, password, pseudo, firstname } = req.body; 
    if (!email || !password) {
        return res.json({ message: 'Email et mot de passe sont requis' });  
    }
    
    const newUser = await users.create_user(email, password, pseudo, firstname);  
    res.json(newUser);  
});


router.get('/:email', async (req, res) => {
    const { email } = req.params;  
    
    const user = await users.connect_user(email);  
    if (user) {
        return res.json(user);
    } else {
        return res.json({ message: 'Utilisateur non trouvé' }); 
    }
});

module.exports = router;
