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
                            res.redirect('/signin');
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

//GET /signin
exports.logIn = (req,res,next) => {
    const username = req.query.username;
    const password = req.query.password;
    models.user.findOne({where: {username: username}})
    .then(user => {
        if(!user){
            req.flash('error','Nombre de usuario incorrecto');
            res.redirect('/signin');
        }else{
            bCrypt.compare(password, user.password, (err, res) => {
                if(res){
                    req.session.username = username;
                    req.flash('success','User logged in succesfully');
                    res.redirect('/');
                }else{
                    req.flash('error','Incorrect password');
                    res.redirect('/signin');
                }
            });
        }
    }).catch( error => {
        req.flash('error','Error logging in: ' + error.message);
        next(error);
    });
};
