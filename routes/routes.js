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

router.post('/cadastrarPedido', pedidoController.cadastrarPedido);

router.get('/produtos', productController.listProducts);

module.exports = router;
