const express = require('express');
const morgan = require('morgan');
const db = require('../db/image.js');

const app = express();
const port = 3000; 

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

app.get('/:restaurant_id/images', (req, res) => {
  const {restaurant_id} = req.params;
  db.find({ restaurant_id: restaurant_id }, '-_id -__v', (err, data) => {
    if (err) console.log('error');
    res.send(data);
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

