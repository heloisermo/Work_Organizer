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
async function update_task(id_task, status) {
    try {
        const query = 'UPDATE tasks SET status = $2 WHERE id_task = $1 RETURNING *';
        const values = [id_task, status];
        const res = await db.update(query, values);
        if(res.rows.length===0)
        {
            console.log(`Aucune tâche trouvée avec l'ID: ${id_task}`);
            throw new Error('Tâche non trouvée');
        }
        console.log('Updated task status to', status);
        return res.rows[0];
    } catch (err) {
        console.error('Erreur lors de la mise à jour de la tâche', err);
        throw err;
    }
}
module.exports = { list, create_task, update_task };