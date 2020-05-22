const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dree = require('dree');
const fs = require('fs');
const path = require('path');

const app = express();

const INPUTS_DIR = path.join(__dirname, 'inputs');

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/files-list', (req, res) => {
    const result = dree.scan(INPUTS_DIR, { extensions: ['txt'], depth: 1 })
        .children
        .map(node => ({ name: node.name, path: node.relativePath }));
    res.send(result);
});

app.get('/input', (req, res) => {
    const file = req.query.file;
    const result = fs.readFileSync(path.join(INPUTS_DIR, file), 'utf-8');
    res.send(result);
});

app.listen(8000, () => console.log('Listening on port 8000'));