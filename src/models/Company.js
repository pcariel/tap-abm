const { Sequelize } = require('sequelize');

/**
 * Create model User
 * @param {Sequelize} sequelize
 * @param {DataTypes} DataTypes
 */

function companyModel(sequelize, DataTypes) {
  const Compamy = sequelize.define('Company', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    legal_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Compamy;
};

module.exports = companyModel;
