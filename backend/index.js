// Import required modules
const express = require('express');
const dotenv = require('dotenv');

// Configure dotenv to load .env variables
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World! Your LMS is running.');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
