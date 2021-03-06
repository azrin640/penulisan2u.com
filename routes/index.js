const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

// Base Pages
router.get('/', (req, res) => {
  res.render('home_content', {title: 'Selamat Datang'});
});

router.get('/contact', (req, res) => {
  res.render('contact', {title: 'Contact'});
});

// Register
router.post('/register',
  userController.validateRegister,
  catchErrors(userController.register),
  //authController.login
);

// Login
router.get('/login', userController.login);
router.post('/login', authController.login);
router.post('/login-modal', authController.loginModal);

// Logout
router.get('/logout', authController.logout);

module.exports = router;
