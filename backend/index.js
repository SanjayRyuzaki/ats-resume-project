const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./utils/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic hello route
app.get('/', (req, res) => {
  res.json({ message: 'ATS Resume Checker API' });
});

// 🔌 Test DB connection route
app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
