const pool = require('../utils/pool');

module.exports = class User {
  id;
  username;

  constructor(row) {
    this.id = row.id;
    this.username = row.username;
  }

  static async insert(user) {
    const { rows } = await pool.query(
      'INSERT into users (username) VALUES ($1) RETURNING *',
      [user.username]
    );
    return new User(rows[0]);
  }

  static async findByUsername(username) {
    const { rows } = await pool.query(
      'SELECT * FROM users WHERE username=$1',
      [username]
    );

    if (!rows[0]) throw new Error(`user with username ${username} not found`);
    else return new User(rows[0]);
  }

};
