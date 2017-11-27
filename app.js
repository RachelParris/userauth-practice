const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');

// Requiring our models for syncing
const {sequelize} = require("./models");

// Sets up the Express app to handle data parsing
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('./public'));

const routes = require('./routes/userRoutes')(app);
// app.use('/user', routes);

app.get('/', function (req, res) {
  res.send('Work in progress!!!');
})

const PORT = config.port;
sequelize.sync({ force: false })
  .then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});
