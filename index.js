const mongoose = require('mongoose');

//Import the env variables
require('dotenv').config({ path: 'variables.env' });

//Connecting the database
mongoose.connect(process.env.DATABASE, {
  useMongoClient: true
});
//Tell mongo to use the global promises
mongoose.Promise = global.Promise;
//Error handling
mongoose.connection.on('error', (err) => console.log(err));


//Preparing the listening process
const app = require('./app');
//Setting the port, if it's in development run it on htttp://localhost:5000
app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on port ${server.address().port}`)
});
