"use strict";
const bCrypt = require('bcrypt');
const Sequelize = require("sequelize");
const {models} = require("../models");

// Autoload the user with id equals to :userId
exports.load = (req, res, next, userId) => {
    models.user.findByPk(userId)
        .then(user => {
            if (user) {
                req.user = user;
                next();
            } else {
                req.flash('error', 'There is no user with id=' + userId + '.');
                throw new Error('No exist userId=' + userId);
            }
        })
        .catch(error => next(error));
};

//POST /signup
exports.newUser = (req,res,next) => {
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;
    models.user.findOne({where: {username: username}})
    .then(user => {
        if(user){
            req.flash('error','User already exists');
            res.redirect('/signup');
        }else{
            if(password===password2){
                bCrypt.hash(password, 10, (err, hash) => {
                    models.user.create({username: username,password: hash})
                        .then(() => {
                            req.flash('success','User created succesfully');
                            res.redirect('/login');
                        })
                        .catch(Sequelize.ValidationError, error => {
                            req.flash('error', 'There are errors in the form:');
                            error.errors.forEach(({message}) => req.flash('error', message));
                            res.redirect('/signup');
                        });
                });
            }else{
                req.flash('error','Passwords do not match');
                res.redirect('/signup');
            }
        }
    })
    .catch(error => {
        req.flash('error','Error creating user: ' + error.message);
        next(error);
    });
};

//GET /login
exports.logIn = (req,res,next) => {
    if(req.session.user){
        req.flash('error','You are logged in');
        return res.redirect('/');
    }
    const username = req.query.username;
    const password = req.query.password;
    models.user.findOne({where: {username: username}})
    .then(user => {
        if(!user){
            req.flash('error','Nombre de usuario incorrecto');
            res.redirect('/login');
        }else{
            bCrypt.compare(password, user.password, (err, result) => {
                if(result){
                    req.session.user = user;
                    req.flash('success','User logged in succesfully');
                    res.redirect('/');
                }else{
                    req.flash('error','Incorrect password');
                    res.redirect('/login');
                }
            });
        }
    }).catch( error => {
        req.flash('error','Error logging in: ' + error.message);
        next(error);
    });
};

//GET /logout
exports.logOut = (req,res,next) => {
    if(!req.session.user){
        req.flash('error','You are not logged in');
        return res.redirect('/login');
    }else{
        req.session.user = null;
        req.flash('success','User logged out successfully');
        return res.redirect('/login');
    }
};
