const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const cadastroController = require('../controllers/cadastroController');
const pedidoController = require('../controllers/pedidoController');
const productController = require('../controllers/productController');

// Rota de login
router.post('/login', loginController.login);

// Rota de cadastro de Usuario
router.post('/cadastro', cadastroController.register);

// Rota de cadastro de pedido
router.post('/cadastrarPedido', pedidoController.cadastrarPedido);

// Rota para verificar o CPF
router.post('/verificarCpf', pedidoController.verificarCpf); 

// Rota para listar produtos
router.get('/produtos', productController.listProducts);

module.exports = router;
