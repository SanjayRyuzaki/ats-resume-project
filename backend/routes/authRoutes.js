// routes/authRoutes.js
const express = require("express");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const pool = require("../utils/db");

const router = express.Router();

// POST /api/auth/google
router.post("/google", async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Missing Google token" });
  }

  try {
    // Validate token with Google
    const googleRes = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { email, name, picture } = googleRes.data;

    // Check if user exists or insert new user
    const userRes = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    let userId;

    if (userRes.rows.length > 0) {
      userId = userRes.rows[0].id;
    } else {
      const insertRes = await pool.query(
        "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id",
        [name, email]
      );
      userId = insertRes.rows[0].id;
    }

    // Create your own JWT
    const ourToken = jwt.sign(
      { id: userId, email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token: ourToken,
      user: { name, email, avatarUrl: picture }
    });
  } catch (err) {
    console.error("Google auth error:", err.message);
    res.status(401).json({ error: "Google token invalid or expired" });
  }
});

module.exports = router;
