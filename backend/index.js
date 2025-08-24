const express = require('express');
const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/players', (req, res) => {
  const results = [];
  fs.createReadStream('players.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results);
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
