
const { Client } = require('pg');

async function select(query, params = []) {
    
    const client = new Client({
        user: 'postgres',
        password: '123',
        host: 'localhost',
        port: 5432,
        database: 'work_organizer',
      });
    try {
      await client.connect();
      const result = await client.query('SELECT * FROM users');
      return result.rows;

    } catch (error) {
      console.error('Error executing SELECT query:', error);
      throw error;
    } finally {
      await client.end();
    }
  }
  async function insert(query, params) {
    const client = new Client({
        user: 'postgres',
        password: '123',
        host: 'localhost',
        port: 5432,
        database: 'work_organizer',
    });

    await client.connect();

    try {
        const res = await client.query(query, params);
        return res; 
    } catch (err) {
        console.error('Erreur d\'exécution de la requête', err);
        throw err; 
    } finally {
        await client.end();
    }
}


  module.exports = { select, insert };
  