const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }
});

pool.on('connect', () => console.log('Postgres connected'));
pool.query('DROP TABLE IF EXISTS users CASCADE')
pool.query("CREATE TABLE users(id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, username TEXT NOT NULL)")
module.exports = pool;


