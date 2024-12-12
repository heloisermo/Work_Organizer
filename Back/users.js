// 'id : serial, email : text, password : text'

const { Client } = require('pg');
const db = require('./db.js');

async function list() {
    return await db.select('SELECT * FROM users')
    }

async function post(email, password) {
    try {
        const query = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *';
        const values = [email, password];
    
        const res = await db.insert(query, values);
        return res.rows[0];  // Retourne l'utilisateur créé (avec l'ID généré)
    } catch (err) {
        console.error('Erreur lors de la création de l\'utilisateur', err);
        throw err;
    }
}

async function get(email) {
    try {
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
    
        const res = await db.insert(query, values);
    
            // Si l'utilisateur existe, on retourne la première ligne (car il devrait y avoir un seul utilisateur avec cet email)
        if (res.rows.length > 0) {
            return res.rows[0];
        } else {
            return null;  // Aucun utilisateur trouvé avec cet email
        }
    } catch (err) {
        console.error('Erreur lors de la récupération de l\'utilisateur', err);
        throw err;
    }
}

module.exports = { list, post, get };

