const User = require('../models/user');

// POST route for creating a new user
module.exports = {
  register: function (req, res) {
    User.create({
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
  }
}
