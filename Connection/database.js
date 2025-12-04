// Connection/database.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,        // Database name
    process.env.DB_USER,        // MySQL username
    process.env.DB_PASSWORD,    // MySQL password
    {
        host: process.env.DB_HOST,   // Example: localhost
        dialect: "mysql",
    }
);

// Test connection
sequelize
    .authenticate()
    .then(() => console.log("MySQL Database connected successfully"))
    .catch((err) => console.log("MySQL connection failed:", err));

module.exports = sequelize;
