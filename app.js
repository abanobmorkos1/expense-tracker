const express = require('express');
require('dotenv').config();

const app = express();
const morgan = require('morgan');
const port = process.env.PORT;

//  middleware
app.use(express.json());
app.use(morgan('dev'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
