const express = require('express');
const router = require('./route'); // your routes
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// ---------------- CORS ----------------
const allowedOrigins = [
    "http://localhost:5173", // dev frontend
    "https://your-frontend-production.vercel.app" // prod frontend
];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like Postman)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

// ---------------- JSON parser ----------------
app.use(express.json());

// ---------------- Routes ----------------
app.use('/', router);

// ---------------- Start server ----------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
