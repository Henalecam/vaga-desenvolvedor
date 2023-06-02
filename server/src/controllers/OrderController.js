const Order = require('../models/Order');
const Product = require('../models/Product');
const Client = require('../models/Client');

module.exports = {
  async index(request, response) {
    const orders = await Order.findAll({
      include: [
        {
          model: Product,
          as: 'product',
          attributes: ['title', 'price', 'stock']
        },
        {
          model: Client,
          as: 'client',
          attributes: ['name', 'cpf', 'email']
        }
      ]
    });
    return response.json(orders);
  },
  async store(request, response) {
    const { client_id, product_id, quantity } = request.body;
    const order = await Order.create({ client_id, product_id, quantity });
    return response.json(order);
  },
  async update(request, response) {
    const { client_id, product_id, quantity } = request.body;
    const { id } = request.params;
    const order = await Order.update({ client_id, product_id, quantity }, { where: { id } });
    return response.json(order);
  },
  async delete(request, response) {
    const { id } = request.params;
    const order = await Order.destroy({ where: { id } });
    return response.json(order);
  }
};
