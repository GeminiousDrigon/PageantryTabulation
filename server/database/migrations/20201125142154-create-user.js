'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
		id: {
			allowNull: false,
			primaryKey: true,
			type: Sequelize.UUID
		},
		firstname: {
			type: Sequelize.STRING
		},
		lastname: {
			type: Sequelize.STRING
		},
		username: {
			type: Sequelize.STRING
		},
		email: {
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
    await queryInterface.dropTable('Users');
  }
};