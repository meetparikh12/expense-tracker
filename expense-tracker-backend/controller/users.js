const User = require('../model/User');
const ErrorHandling = require('../model/ErrorHandling');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secretKey} = require('../config/key');
const {validationResult} = require('express-validator');

exports.REGISTER_USER = async (req,res,next) => {
    
    const error = validationResult(req);
    
    if(!error.isEmpty()){
        let err = {};
        err.message = error.array();
        err.status = 422;
        return next(err);
    }

    const {name,email,password,confirmPassword} = req.body;
    let user;
    try {
        user = await User.findOne({email: email});
    } catch(err) {
        return next(new ErrorHandling('User not fetched', 500));
    } 
    if(user) {
        return next(new ErrorHandling('Email already exist', 422));
    } 
    if(password !== confirmPassword) {
        return next(new ErrorHandling('Password does not match', 422));
    }
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch(err){
        return next(new ErrorHandling('Password not hashed', 500));
    }
    user = new User({
        name,
        email,
        password: hashedPassword
    })
    try {
        await user.save();
    } catch(err){
        return next(new ErrorHandling('User not registered', 500))
    } 
    res.status(201).json({message: 'Registered Successfully'});
}

exports.LOGIN_USER = async (req,res,next)=> {
    const {email, password} = req.body;
    let user;
    try {
        user = await User.findOne({email: email})
    } catch(err){
        return next(new ErrorHandling('User not fetched', 500));
    } 
    if(!user){
        return next(new ErrorHandling('Invalid credentials', 403));
    }
    let isPasswordEqual;
    try {
        isPasswordEqual = await bcrypt.compare(password, user.password);
    }catch(err){
        return next(new ErrorHandling('Password not matched', 500));
    }
    if(!isPasswordEqual){
        return next(new ErrorHandling('Invalid credentials', 403));
    }
    let token;
    try {
        token = jwt.sign(
            {
            userId: user._id,
            email: user.email,
            name: user.name
            }, 
            secretKey, 
            {expiresIn: '1h'}
        )
    } catch(err){
        return next(new ErrorHandling('Not Authenticated', 401))
    }
    res.status(200).json({token});
}

exports.ADD_NEW_TRANSACTION = async (req,res,next)=> {
    const {txt,price} = req.body;
    const transactionInfo = {txt,price}
    const {userId} = req.user;
    let user;
    try {
        user = await User.findById(userId)
    }catch(err){
        return next(new ErrorHandling('User does not exist', 500))
    }
    if(!user){
        return next(new ErrorHandling('User not found', 404))
    }
    try {
        await user.transaction.unshift(transactionInfo)
        await user.save()
    }catch(err){
        console.log(err);
        return next(new ErrorHandling('Transaction not saved',500))
    }
    console.log(user);
    res.status(201).json({message: 'Transaction added', user});
}