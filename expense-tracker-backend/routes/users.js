const express = require('express');
const route = express.Router();
const userController = require('../controller/users');
const {body} = require('express-validator');
const auth = require('../middleware/auth');
const fileUpload = require('../middleware/fileUpload');

route.post('/register', fileUpload.single('image'), [
    body('name').trim().isLength({min: 4, max: 30}).withMessage('Name should be between 4 to 10 characters'),
    body('email').trim().isEmail().normalizeEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6, max: 15}).withMessage('Password should be between 6 to 10 characters')
] ,userController.REGISTER_USER);

route.post('/login', userController.LOGIN_USER);
route.post('/transaction',auth ,userController.ADD_NEW_TRANSACTION);
module.exports = route;