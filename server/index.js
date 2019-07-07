const express = require('express');
const morgan = require('morgan');
const db = require('../db/image.js');

const app = express();
const port = 3000; 

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

app.get('/images', (req, res) => {
  db.find((err, data) => {
    if (err) console.log('error');
    res.send(data);
  }).limit(10)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
