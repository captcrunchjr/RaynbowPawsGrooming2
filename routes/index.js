var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RaynbowPaws Grooming' });
});

/* GET About Us page. */
router.get('/aboutUs', function(req, res, next) {
  res.render('aboutUs', { title: 'About Us' });
});

module.exports = router;
