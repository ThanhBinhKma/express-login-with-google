
import pool from '../config/db';

export async function createUsersTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
  
    try {
      await pool.query(createTableQuery);
      console.log('Users table created');
    } catch (error) {
      console.error('Error creating users table:', error);
    }
}