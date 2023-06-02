const Product = require('../models/Product');
module.exports = {
  async index(request, response) {
    const products = await Product.findAll();
    return response.json(products);
  },
  async store(request, response) {
    const { title, sku, price, stock } = request.body;
    const product = await Product.create({ title, sku, price, stock });
    return response.json(product);
  },
  async update(request, response) {
    const { title, sku, price, stock } = request.body;
    const { id } = request.params;
    const product = await Product.update({ title, sku, price, stock }, { where: { id } });
    return response.json(product);
  },
  async delete(request, response) {
    const { id } = request.params;
    const product = await Product.destroy({ where: { id } });
    return response.json(product);
  }
};

