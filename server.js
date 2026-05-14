'use strict';

const express = require('express');
const app = express();

const PORT = 3001;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello DevOps LN9 – bertodar');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});