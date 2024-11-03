const express = require('express')
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

app.get('/', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      console.error('Error connecting to database', err);
      res.status(500).send('Error connecting to database');
    } else {
      res.send('Connected to database');
      db.close();
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});