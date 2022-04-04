const router = require('express').Router();
<<<<<<< HEAD
=======
const directoryroutes = require("./dir-routes")
>>>>>>> d3406ada11d1664a8828a7be01d4c7f75632cfd0
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');


router.use('/api', apiRoutes);
<<<<<<< HEAD
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);


router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;
=======
router.use('/',directoryroutes)
module.exports = router;
>>>>>>> d3406ada11d1664a8828a7be01d4c7f75632cfd0
