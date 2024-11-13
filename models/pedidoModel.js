// models/pedidoModel.js

const pool = require('../database/config');

// Função para verificar o CPF no banco
async function verificarCpf(cpf) {
    let conn;
    try {
        conn = await pool.getConnection();
        const query = `
            SELECT id_cliente FROM cliente WHERE cpf = ?
        `;
        const result = await conn.query(query, [cpf]);
        
        // Retorna o id_cliente se encontrado, senão retorna null
        return result.length > 0 ? result[0].id_cliente : null;
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.end();
    }
}

// Função para cadastrar o pedido no banco
async function cadastrarPedido(id_cliente, id_produto, quantidade_produto, valor_unidade, valor_total, data_retirada, forma_pagamento) {
    let conn;
    try {
        conn = await pool.getConnection();
        const query = `
            INSERT INTO pedido (id_cliente, id_produto, quantidade_produto, valor_unidade, valor_total, data_retirada, forma_pagamento)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const result = await conn.query(query, [id_cliente, id_produto, quantidade_produto, valor_unidade, valor_total, data_retirada, forma_pagamento]);

        const insertId = typeof result.insertId === 'bigint' ? Number(result.insertId) : result.insertId;
        return { id: insertId };
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.end();
    }
}

module.exports = { verificarCpf, cadastrarPedido };
