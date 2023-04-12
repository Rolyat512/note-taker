const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {});

app.get('/*', (req, res) => {});

app.get('/notes', (req, res) => {});

app.get('/api/notes', (req, res) => {});

app.post('/api/notes', (req, res) => {});








app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);