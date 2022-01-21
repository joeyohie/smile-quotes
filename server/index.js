const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { save, retrieveRandom, search, retrieveFiveMostRecent, deleteQuote } = require('../database/index.js')

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/quotes', (req, res) => {
  retrieveRandom((err, randomQuote) => {
    if (err) {
      res.status(500).send('error in getting a random quote');
    } else {
      res.send(randomQuote);
    }
  })
});

app.get('/search', (req, res) => {
  search(req.query, (err, searchResults) => {
    if (err) {
      res.status(500).send('error in searching quotes');
    } else {
      res.send(searchResults);
    }
  });
})

app.get('/five-most-recent-quotes', (req, res) => {
  retrieveFiveMostRecent((err, fiveMostRecent) => {
    if (err) {
      res.status(500).send('error in getting the most recently added quotes');
    } else {
      res.send(fiveMostRecent);
    }
  })
})

app.post('/quotes', (req, res) => {
  save(req.body, (err, result) => {
    if (err) {
      res.status(500).send('error in saving quote');
    }
    if (result === 'saved') {
      res.send('saved');
    }
    if (result === 'updated') {
      res.send('updated');
    }
  });
});

app.delete('/delete', (req, res) => {
  deleteQuote(req.body, (err) => {
    if (err) {
      res.status(500).send('error in deleting quote');
    } else {
      res.send();
    }
  })
})

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});