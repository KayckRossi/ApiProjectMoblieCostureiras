// controllers/pedidoController.js
const pedidoModel = require('../models/pedidoModel');

async function verificarCpf(req, res) {
    const { cpf } = req.body;
    console.log('Recebido CPF:', cpf);

    try {
        const id_cliente = await pedidoModel.verificarCpf(cpf);
        console.log('ID do Cliente encontrado:', id_cliente);

        if (!id_cliente) {
            return res.status(200).json({ exists: false });
        }

        res.status(200).json({ exists: true, id_cliente: id_cliente });
    } catch (error) {
        console.error('Erro ao verificar CPF:', error);
        res.status(500).json({ message: 'Erro ao verificar CPF', error: error.message });
    }
}


async function cadastrarPedido(req, res) {
    const { cpf, id_produto, quantidade_produto, valor_unidade, valor_total, data_retirada, forma_pagamento } = req.body;

    try {
        // Chama a função do modelo para verificar se o CPF existe
        const id_cliente = await pedidoModel.verificarCpf(cpf);
        
        if (!id_cliente) {
            // Se o CPF não for encontrado, retorna erro 404
            return res.status(404).json({ message: 'CPF não cadastrado' });
        }

        // Se o CPF for encontrado, chama a função do modelo para cadastrar o pedido
        const result = await pedidoModel.cadastrarPedido(id_cliente, id_produto, quantidade_produto, valor_unidade, valor_total, data_retirada, forma_pagamento);
        
        // Responde com sucesso e o ID do pedido
        res.status(201).json({ message: 'Pedido cadastrado com sucesso', pedidoId: result.id });
    } catch (error) {
        // Se houver erro, responde com status 500
        console.error('Erro ao cadastrar pedido:', error);
        res.status(500).json({ message: 'Erro ao cadastrar pedido', error: error.message });
    }
}

module.exports = { cadastrarPedido, verificarCpf };
