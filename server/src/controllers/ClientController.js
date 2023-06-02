const Client = require('../models/Client');
module.exports = {
  async index(request, response) {
    const clients = await Client.findAll();
    return response.json(clients);
  },
  async store(request, response) {
    const { name, cpf, email } = request.body;
    const client = await Client.create({ name, cpf, email });

    return response.json(client);
  },

  async update(request, response) {
    const { name, cpf, email } = request.body;
    const { id } = request.params;
    const client = await Client.update({ name, cpf, email }, { where: { id } });

    return response.json(client);
  },

  async delete(request, response) {
    const { id } = request.params;
    const client = await Client.destroy({ where: { id } });

    return response.json(client);
  }
};
