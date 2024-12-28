const { Client } = require('pg');
const db = require('./db.js');

async function list() {
    return await db.select('SELECT * FROM tasks')
}

async function create_task(title, date, id_client, status) {
    try {
        const query = 'INSERT INTO tasks (id_client, date, title, status) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [id_client, date, title, status];
    
        const res = await db.insert(query, values);
        console.log('Creation', title)
        return res.rows[0];  
        
    } catch (err) {
        console.error('Erreur lors de la création de la tâche', err);
        throw err;
    }
}

module.exports = { list, create_task };