const express = require('express');
const path = require('path');

const app = express();

//Serve static files from the react app
app.use(express.static(path.join(__dirname, 'client/build')));

//Put all api endpoint under '/api'
app.get('/api', (req, res) => {
  res.json({message: 'Welcome to Express'})
});

//Preparing the listening process

//Setting the port, if it's in development run it on htttp://localhost:5000
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`The api runs on port ${port}`);
