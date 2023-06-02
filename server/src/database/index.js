const { Sequelize } = require('sequelize');

const databaseConfig = require('../config/database');

const Client = require('../models/Client');

const Product = require('../models/Product');

const Order = require('../models/Order');

const connection = new Sequelize(databaseConfig);

Client.init(connection);

Product.init(connection);

Order.init(connection);

Client.associate(connection.models);

Product.associate(connection.models);

Order.associate(connection.models);

module.exports = connection;