const express = require('express');
const router = require('./route');
const dotenv = require('dotenv');
const cors = require("cors");
const path = require("path");
const sequelize = require("./Connection/database");

dotenv.config();
const app = express();

// ---------------- CORS ----------------
// Allow your frontend (both localhost and production) to access


app.use(cors());

// Parse JSON
app.use(express.json());

// Connect & sync DB
// sequelize.authenticate()
//     .then(() => console.log("MySQL Connected"))
//     .catch(err => console.log("MySQL Connection Error:", err));

// sequelize.sync({ alter: true })
//     .then(() => console.log("Database Synced"))
//     .catch(err => console.log("Sync Error:", err));

// Static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use('/', router);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
