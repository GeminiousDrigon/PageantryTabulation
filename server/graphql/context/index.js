const db = require("../../database/models");

const context = ({ req, res }) => {
	return {
		user: () => req.user || null,
		req,
		res,
		db: {
			models:db.sequelize.models,
			Op: db.Sequelize.Op,
			Sequelize: db.Sequelize
		}
	};
};

module.exports = context;
