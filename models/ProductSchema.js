const { DataTypes } = require('sequelize');
const sequelize = require('../Connection/database');

const Product = sequelize.define('Product', {
    product_photo: {
        type: DataTypes.STRING, // store the actual image
        allowNull: true
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: { min: 0 }
    },

    small_feature: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'products',
    timestamps: true
});

module.exports = Product;
