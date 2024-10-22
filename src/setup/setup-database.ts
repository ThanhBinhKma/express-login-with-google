import pool from "../config/db";
import { createUsersTable } from "../migrations";


async function setupDatabase() {
    try {
        await createUsersTable()
        console.log('Database setup completed');
    }
    catch (error) {
        console.error(error)
    
} finally {
    await pool.end();  // Đóng kết nối
  }
}

setupDatabase();