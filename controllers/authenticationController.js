const db = require('../models');

// POST route for creating a new user
module.exports = {
  register: function (req, res) {
    const user = db.User.create({
      username: req.body.username,
      password: req.body.password
    }).then(function (res) {
      res.send(user.toJSON());

    })
      .catch(function (err) {
        res.status(400).send({
          error: 'This username has already been taken.'
        });
    });
  }
}
