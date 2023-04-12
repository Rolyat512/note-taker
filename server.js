const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);