const pool = require('../database/config');

async function getProducts() {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM produto'); 
        return rows;
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.end();
    }
}

module.exports = { getProducts };
