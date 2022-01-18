const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { save, retrieveRandom } = require('../database/index.js')

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/quotes', (req, res) => {
  retrieveRandom((randomQuote) => {
    res.send(randomQuote);
  })
});

app.post('/quotes', (req, res) => {
  console.log('in post:', req.body);
  save(req.body, (result) => {
    if (result === 'error in saving quote') {
      res.send('error in saving quote');
    } else {
      res.send('quote saved :)');
    }
  });
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});