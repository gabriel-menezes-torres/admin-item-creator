const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize');

class Catalog extends Model {}
Catalog.init({
    //build
}, {
  sequelize,
  modelName: 'Catalog',
  tableName: 'catalog'
});

// Sincronizar o modelo com o banco de dados (criar a tabela se não existir)
Catalog.sync({ alter: true });

module.exports = Catalog;
