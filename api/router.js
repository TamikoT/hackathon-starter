var express = require('express');
var router = express.Router();
var roomRoutes = require('./routes/roomRoutes');

// route middleware that will happen on every request
router.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next();
});

router.use('/', function (req, res) {
  res.status(200).json({ message: 'Connected!' });
  res.send('Muviato home');
});

// router.get('/api', function (req, res) {
//   res.send('Api start');
// });

router.use('/rooms', roomRoutes);

module.exports = router;
