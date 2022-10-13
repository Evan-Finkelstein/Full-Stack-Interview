const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://rmscvgfmxqtgjj:3356e08a0d9fdfa5c2781c5750a0491b5c4b5ebfc018ca8b9de1812b50b01b06@ec2-52-21-111-28.compute-1.amazonaws.com:5432/d2nnt274i89vlh',
  ssl: require && { rejectUnauthorized: false }
});

pool.on('connect', () => console.log('Postgres connected'));
pool.query('DROP TABLE IF EXISTS users CASCADE')
pool.query("CREATE TABLE users(id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, username TEXT NOT NULL)")
module.exports = pool;


