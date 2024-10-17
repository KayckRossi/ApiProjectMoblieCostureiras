const cadastroModel = require('../models/cadastroModel');

async function register(req, res) {
    const { cpf, senha, telefone, endereco } = req.body;

    try {
        const result = await cadastroModel.registerUser(cpf, senha, telefone, endereco);
        res.status(201).json({ message: 'Cadastro realizado com sucesso', clienteId: result.id });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao realizar cadastro', error: error.message });
    }
}

module.exports = { register };
