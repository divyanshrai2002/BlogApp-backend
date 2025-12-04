const express = require('express');
const router = require('./route');
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
const path = require("path");

// ✅ IMPORT sequelize connection (this was missing)
const sequelize = require("./Connection/database");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Connect & Sync Database
sequelize.authenticate()
    .then(() => console.log("MySQL Connected"))
    .catch(err => console.log("MySQL Connection Error:", err));

sequelize.sync({ alter: true })
    .then(() => console.log("Database Synced"))
    .catch(err => console.log("Sync Error:", err));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ROUTES
app.use('/', router);

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
