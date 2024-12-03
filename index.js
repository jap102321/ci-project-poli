const express = require('express')
const app = express()
const Sentry = require('@sentry/node')
const port = 3000

const MongoClient = require('mongodb').MongoClient

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

Sentry.init({
  dsn: "https://fa62dfd87f05d12226330212df626b10@o4508400688955392.ingest.us.sentry.io/4508401345101824"
});

app.use(Sentry.Handlers.requestHandler());

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

app.get('/sentry', function mainHandler(req, res){
  res.send('Conexión Sentry');
});

app.get('/error', function triggerError(req, res){
  throw new Error('!Este es un error!');
});

app.use(Sentry.Handlers.errorHandler());

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});