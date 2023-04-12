const router = require('express').Router();

router.use('/', require('./htmlRoutes'));

router.use('/api', require("./apiRoutes.js"));

module.exports = router;