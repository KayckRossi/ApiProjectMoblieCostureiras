const pool = require('../database/config');

async function cadastrarPedido(pedido, medidas, valor, quantidade, formaPagamento) {
    let conn;
    try {
        conn = await pool.getConnection();
        const query = `
            INSERT INTO pedidos (pedido, medidas, valor, quantidade, forma_pagamento)
            VALUES (?, ?, ?, ?, ?)
        `;
        const result = await conn.query(query, [pedido, medidas, valor, quantidade, formaPagamento]);

        // Retorna o ID do pedido cadastrado
        const insertId = typeof result.insertId === 'bigint' ? Number(result.insertId) : result.insertId;
        return { id: insertId };
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.end();
    }
}

module.exports = { cadastrarPedido };
