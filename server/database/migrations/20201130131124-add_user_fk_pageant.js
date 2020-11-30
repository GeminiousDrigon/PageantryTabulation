"use strict";

const User = require("../models/User");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		await queryInterface.addColumn("pageants", "user_id", {
			type: Sequelize.UUID,
			key: "id",
			allowNull: false
		});
		await queryInterface.addConstraint("pageants", {
			fields: ["user_id"],
			type: "foreign key",
			name: "pageants_fk_user",
			references: {
				//Required field
				table: "users",
				field: "id"
			},
			onDelete: "cascade",
			onUpdate: "cascade"
		});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	}
};
