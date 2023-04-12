const router = require('express').Router();
let store = require('../db/db.json');
const { writeFile } = require('fs');

router.get('/notes', (req, res) => {
    res.json(store)
});

router.post('/notes', ({body}, res) => {
    body.id = Math.floor(Math.random()*1000000).toString(16);
    store.push(body);

    
});

module.exports = router;