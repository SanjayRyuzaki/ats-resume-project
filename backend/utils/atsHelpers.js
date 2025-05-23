const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');

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

module.exports = {
  parseResume,
  parseJob,
};
