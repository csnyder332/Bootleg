const router = require('express').Router();
const directoryroutes = require("./dir-routes")
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
router.use('/',directoryroutes)
module.exports = router;
