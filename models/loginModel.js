const bcrypt = require('bcrypt');
const pool = require('../database/config');

module.exports = {
    fazerLogin: async function (cpf, senha) {
        let conn;
        try {
            conn = await pool.getConnection();
            const rows = await conn.query('SELECT * FROM cliente WHERE cpf = ?', [cpf]);
            console.log('Dados encontrados:', rows);

            if (rows.length > 0) {
                // Compara a senha fornecida com a hash no banco de dados
                const match = await bcrypt.compare(senha, rows[0].senha);
                console.log('Senha corresponde:', match);

                if (match) {
                    return rows; // Retorna o usuário encontrado
                }
            }

            return []; // Retorna vazio se a senha não corresponder ou o usuário não for encontrado
        } catch (err) {
            throw err;
        } finally {
            if (conn) conn.end();
        }
    }
};
