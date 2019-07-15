const express = require('express');
const morgan = require('morgan');
const db = require('../db/image.js');

const app = express();
const port = 3001;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

app.get('/:restaurant_id/images', (req, res) => {
  const { restaurant_id } = req.params;
  db.find({ restaurant_id }, '-_id -__v', (err, data) => {
    if (err) res.status(400).end('error');
    res.send(data);
  });
});
