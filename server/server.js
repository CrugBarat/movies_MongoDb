const express = require('express');
const cors = require('cors');
const createRouter = require('./helpers/create_router.js');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('movies_list');
  const moviesCollection = db.collection('movies');
  const moviesRouter = createRouter(moviesCollection);
  app.use('/api/movies', moviesRouter);
})
.catch(console.error);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
