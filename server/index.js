const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000; 

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));