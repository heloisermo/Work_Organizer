const { Client } = require('pg');
const db = require('./db.js');

async function list() {
    return await db.select('SELECT * FROM tasks')
}

async function create_task(contenu, date, id_client) {
    try {
        const query = 'INSERT INTO tasks (id_client, date, contenu) VALUES ($1, $2, $3) RETURNING *';
        const values = [id_client, date, contenu];
    
        const res = await db.insert(query, values);
        return res.rows[0];  
    } catch (err) {
        console.error('Erreur lors de la création de la tâche', err);
        throw err;
    }
}

module.exports = { list, create_task };