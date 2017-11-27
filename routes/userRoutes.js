// const authentication = require('../controllers/authenticationController');
const db = require('../models/user');
// const router = require('express').Router();

module.exports = function (app) {
app.get('/', function (req, res) {
  res.status(200).json('User login page pending...');
});

// POST route for creating a new user
// app.post('/register', function(req, res), authentication.register);
app.post('/register', function (req, res) {
  db.User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(function () {
      res.send('Success! User created!!!');
    })
    .catch(function (err) {
      res.status(400).send({
        status: 'Unable to create user',
        error: err
      });
  });
});

app.post('/login');
}
// module.exports = router;
