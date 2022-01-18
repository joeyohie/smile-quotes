const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/', (req, res) => {
//   res.send('It works!');
// });

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});