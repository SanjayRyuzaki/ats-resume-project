const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const stopwords = require('./stopwords.json');

function getFileExtension(filename) {
  return filename.split('.').pop().toLowerCase();
}

async function parseResume(file) {
  const ext = getFileExtension(file.originalname);
  if (ext === 'pdf') {
    return (await pdfParse(file.buffer)).text;
  } else if (ext === 'docx') {
    const result = await mammoth.extractRawText({ buffer: file.buffer });
    return result.value;
  } else {
    throw new Error('Unsupported file type');
  }
}

async function parseJob(file) {
  // Reuse the same logic
  return parseResume(file);
}

function cleanText(text) {
  return text
    .toLowerCase()
    .match(/\w+/g)
    .filter(word => !stopwords.includes(word));
}

function getATSSimilarityScore(resumeText, jobText) {
  const resumeWords = new Set(cleanText(resumeText));
  const jobWords = new Set(cleanText(jobText));
  const matched = [...resumeWords].filter(word => jobWords.has(word));
  return Math.round((matched.length / jobWords.size) * 100);
}

// ✅ Properly export all 3 functions
module.exports = {
  parseResume,
  parseJob,
  getATSSimilarityScore,
};
