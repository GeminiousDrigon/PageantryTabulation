'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pageant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pageant.init(
		{
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			date: DataTypes.DATE,
      address: DataTypes.STRING,
      updatedBy: {
        type: DataTypes.UUID,
        allowNull: false
      }
		},
		{
			sequelize,
			modelName: "Pageant",
			timestamps: true,
			paranoid: true
		}
  );
  return Pageant;
};