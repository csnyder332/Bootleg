const router = require('express').Router();
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
      res.render('homepage');
  });
  module.exports=router