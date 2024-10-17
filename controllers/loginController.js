const loginModel = require('../models/loginModel');

module.exports = {
    login: async function (req, res) {
        const cpf = req.body.cpf;
        const senha = req.body.senha;

        console.log(`Tentativa de login com CPF: ${cpf}`);

        try {
            const result = await loginModel.fazerLogin(cpf, senha);
            if (result.length > 0) {
                req.session.clienteId = result[0].id_cliente;
                console.log(`Login bem-sucedido para o cliente ID: ${result[0].id_cliente}`);
                res.status(200).json({ message: 'success', clienteId: result[0].id_cliente });
            } else {
                console.log('Falha no login: CPF ou senha incorretos', cpf, senha);
                res.status(200).json({ message: 'failure' });
            }
        } catch (err) {
            console.error('Erro ao fazer login:', err);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
};
