const { Sequelize } = require('sequelize');
/**
 * Create model User
 * @param {Sequelize} sequelize
 * @param {DataTypes} DataTypes
 */
function userModel(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    models.User.belongsTo(models.Company, {
      foreignKey: 'company_id',
    });
  };
  return User;
}

module.exports = userModel;
