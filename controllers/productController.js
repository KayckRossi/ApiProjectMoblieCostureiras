const productModel = require('../models/productModel');

async function listProducts(req, res) {
    try {
        const products = await productModel.getProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error('Erro ao listar produtos:', error);
        res.status(500).json({ message: 'Erro ao listar produtos', error: error.message });
    }
}

module.exports = { listProducts };
