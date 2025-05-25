// backend/routes/scoreRoutes.js
const express = require('express');
const multer = require('multer');
const { parseResume, parseJob, getATSSimilarityScore } = require('../utils/atsHelpers');
const pool = require('../utils/db');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST /api/score (protected route)
router.post('/score', authenticate, upload.fields([
  { name: 'resume', maxCount: 1 },
  { name: 'job', maxCount: 1 },
]), async (req, res) => {
  try {
    const resumeFile = req.files['resume'][0];
    const jobFile = req.files['job'][0];

    const resumeText = await parseResume(resumeFile);
    const jobText = await parseJob(jobFile);
    const score = getATSSimilarityScore(resumeText, jobText);

    const resumeTitle = resumeFile.originalname;
    const uploadDate = new Date();

    // Save to checks table
    await pool.query(
      'INSERT INTO checks (user_id, resume_text, job_text, score, resume_title, upload_date) VALUES ($1, $2, $3, $4, $5, $6)',
      [req.user.id, resumeText, jobText, score, resumeTitle, uploadDate]
    );

    res.json({ score });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Scoring failed' });
  }
});

// GET /api/checks (protected route)
router.get('/checks', authenticate, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, resume_title AS title, upload_date AS "uploadDate", score FROM checks WHERE user_id = $1 ORDER BY upload_date DESC',
      [req.user.id]
    );

    res.json({ history: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load score history' });
  }
});

module.exports = router;
