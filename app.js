const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.mongodb_uri;

// middleware
app.use(express.json());
app.use(morgan('dev'));

// Connect to MongoDB
mongoose.connect(uri);

mongoose.connection
  .on("open", () => console.log('✅ Connected to MongoDB'))
  .on("close", () => console.log('❌ Disconnected from MongoDB'))
  .on("error", (err) => console.log('⚠️ MongoDB Error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
