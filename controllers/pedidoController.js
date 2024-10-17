const pedidoModel = require('../models/pedidoModel');

async function cadastrarPedido(req, res) {
    const { pedido, medidas, valor, quantidade, formaPagamento } = req.body;

    try {
        const result = await pedidoModel.cadastrarPedido(pedido, medidas, valor, quantidade, formaPagamento);
        res.status(201).json({ message: 'Pedido cadastrado com sucesso', pedidoId: result.id });
    } catch (error) {
        console.error('Erro ao cadastrar pedido:', error);
        res.status(500).json({ message: 'Erro ao cadastrar pedido', error: error.message });
    }
}

module.exports = { cadastrarPedido };
