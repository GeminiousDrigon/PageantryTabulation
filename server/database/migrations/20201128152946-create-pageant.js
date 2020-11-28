"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("pageants", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			title: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.STRING
			},
			date: {
				type: Sequelize.DATE
			},
			address: {
				type: Sequelize.STRING
			},
			updatedBy: {
				allowNull: false,
				type: Sequelize.UUID
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			deletedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Pageants");
	}
};
