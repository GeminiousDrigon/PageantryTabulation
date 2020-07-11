
console.log(process.env.DB_USERNAME);

module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		port: process.env.DB_PORT,
		dialect: "postgres",
		dialectOptions: {
			bigNumberStrings: true
		},
		migrationStorageTableName: "sequelize_meta"
	},
	test: {
		username: process.env.CI_DB_USERNAME,
		password: process.env.CI_DB_PASSWORD,
		database: process.env.CI_DB_NAME,
		host: process.env.CI_DB_HOSTNAME,
		port: process.env.CI_DB_PORT,
		dialect: "postgres",
		dialectOptions: {
			bigNumberStrings: true
		},
		migrationStorageTableName: "sequelize_meta"
	},
	production: {
		username: process.env.PROD_DB_USERNAME,
		password: process.env.PROD_DB_PASSWORD,
		database: process.env.PROD_DB_NAME,
		host: process.env.PROD_DB_HOSTNAME,
		port: process.env.PROD_DB_PORT,
		dialect: "postgres",
		dialectOptions: {
			bigNumberStrings: true
		},
		migrationStorageTableName: "sequelize_meta"
	}
};
