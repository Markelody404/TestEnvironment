const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 3000;

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public', 'images'));
  },
  filename: function (req, file, cb) {
    cb(null, 'My picture.jpg'); // Always overwrite this file
  }
});


const upload = multer({ storage });

app.use(express.static(path.join(__dirname, 'public')));

// Upload route
app.post('/upload', upload.single('image'), (req, res) => {
  const imagePath = `/images/${req.file.filename}`;
  res.redirect(`/portfolio.html?img=${imagePath}`);
});

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'portfolio.html'));
});

app.listen(PORT, () => {
  console.log(`🌟 Server running at http://localhost:${PORT}`);
});