const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('./public'));

require('./routes/authRoutes')(app);
require('./routes/htmlRoutes')(app);

const routes = require('./routes/appRoutes')
// app.use('/app', routes)


const PORT = config.port;
db.sequelize.sync({ force: false })
  .then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});
