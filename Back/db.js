
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
  
  module.exports = { select };
  