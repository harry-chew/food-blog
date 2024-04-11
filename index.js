const express = require('express');
const FileHandler = require('./src/FileHandler');
const path = require('path');

const fh = new FileHandler();

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Hi');
});

const file = path.join(__dirname, 'file.txt');
fh.CreateFile(file);