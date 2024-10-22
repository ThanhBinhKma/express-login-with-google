import  pool from "../config/db";

export interface User {
    id?: number;
    name: string;
    email: string;
}

export const createUser = async (user: User) => {
    const {name, email} = user;
    const query = 
    `
    INSERT INTO users (name, email)
    VALUES (?, ?)
    ON DUPLICATE KEY UPDATE name = VALUES(name)
  `;

  const [result] = await pool.query(query, [name, email]);
  return result;
}