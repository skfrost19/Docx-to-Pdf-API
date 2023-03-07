const express = require('express');
const multer = require('multer');
const DocxToPdf = require('docx-pdf');
const fs = require('fs');

var port  = process.env.PORT || 3000;

const app = express();
const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/convert', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }

  const filePath = req.file.path;
  const pdfPath = `${filePath}.pdf`;

  DocxToPdf(filePath, pdfPath, (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Conversion failed', error: err });
    }

    res.download(pdfPath, err => {
      if (err) {
        console.error('Failed to send PDF', err);
      }

      // Remove the temporary files
      fs.unlinkSync(filePath);
      fs.unlinkSync(pdfPath);
    });
  });
});

app.listen(port, () => {
  console.log('Server listening on port 3000');
});
