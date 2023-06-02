const { Model, DataTypes } = require('sequelize');

class Order extends Model {
  static init(sequelize) {
    super.init({
      total: DataTypes.FLOAT,
      status: DataTypes.STRING,
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
  }
}


module.exports = Order;
