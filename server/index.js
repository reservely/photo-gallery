const express = require('express');
const morgan = require('morgan');
const db = require('../db/image.js');
const path = require('path');

const app = express();
const port = 3001;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public/')));
app.use('/:restaurant_id', express.static(path.join(__dirname, '/../public/')));

app.get('/:restaurant_id/images', (req, res) => {
  const restaurantId = req.params.restaurant_id;
  db.find({restaurant_id:restaurantId}, '-_id -__v', (err, data) => {
    console.log(data)
    if (err) res.status(400).send(err);
    res.status(200).send(data);
  });
});
