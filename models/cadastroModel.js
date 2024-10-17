const bcrypt = require('bcrypt');
const pool = require('../database/config');

async function registerUser(cpf, senha, telefone, endereco) {
    try {
        // Hash da senha
        const hashedPassword = await bcrypt.hash(senha, 10);
        
        // Query para inserir o cliente no banco
        const query = 'INSERT INTO cliente (cpf, senha, telefone, endereco ) VALUES (?, ?, ?, ?)';
        // Executa a query
        const result = await pool.query(query, [cpf, hashedPassword, telefone, endereco ]);

        // Converte o insertId para Number caso seja BigInt
        const insertId = typeof result.insertId === 'bigint' ? Number(result.insertId) : result.insertId;

        return { id: insertId };
    } catch (error) {
        throw error;
    }
}

module.exports = { registerUser };
