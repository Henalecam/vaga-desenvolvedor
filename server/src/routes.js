const express = require('express');

const ClientController = require('./controllers/ClientController');
const ProductController = require('./controllers/ProductController');
const OrderController = require('./controllers/OrderController');

const routes = express.Router();


// Rotas para clientes
routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);
routes.put('/clients/:id', ClientController.update);
routes.delete('/clients/:id', ClientController.delete);

// Rotas para produtos
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

// Rotas para pedidos
routes.get('/orders', OrderController.index);
routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);
routes.delete('/orders/:id', OrderController.delete);

module.exports = routes;