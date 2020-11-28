"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			firstname: {
        type: DataTypes.STRING,
			},
			lastname: {
        type: DataTypes.STRING,
			},
			username: {
        type: DataTypes.STRING,
			},
			email: {
        type: DataTypes.STRING,
			},
			updatedBy: {
				type: DataTypes.UUIDV1,
				allowNull: false
			}
		},
		{
			sequelize,
			modelName: "User",
			timestamps: true,
			paranoid: true
		}
	);
	return User;
};
