const authentication = require('../controllers/authenticationController');

module.exports = function(app) {

app.get('/', function (req, res) {
  res.status(200).json('User login page pending...');
});

// POST route for creating a new user
app.post('/register', authentication.register);

app.post('/login');
}
