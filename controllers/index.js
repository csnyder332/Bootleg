const router = require('express').Router();
const homeroutes = require("./idkwhythisisnttheindex")
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
router.use('/',homeroutes)
module.exports = router;
