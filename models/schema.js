const { DataTypes } = require("sequelize");
const sequelize = require("../Connection/database");

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    role: {
        type: DataTypes.ENUM("Customer", "Admin"), // safer
        allowNull: false
    },

    adminId: {
        type: DataTypes.STRING,
        allowNull: true, // allow null for customers
        defaultValue: null
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
});

// Add validation: if role is Admin, adminId MUST NOT be null
User.beforeCreate((user) => {
    if (user.role === "Admin") {
        if (!user.adminId || user.adminId.trim() === "") {
            throw new Error("Admin ID is required when role is Admin");
        }
    }
});

module.exports = User;

