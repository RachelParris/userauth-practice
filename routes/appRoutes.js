const appRoute = require('express').Router();
const appController = require('../controllers/appController');

// Dashboard -- the main page after the user successfully logs in
appRoute.get('/');

// User Profile -- user can make changes liek update their email address or password
appRoute.get('/profile/:user');
