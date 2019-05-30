"use strict";
const bCrypt = require('bcrypt');
const Sequelize = require("sequelize");
const {models} = require("../models");
const paginate = require('../helpers/paginate').paginate;

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

// GET /users
exports.index = (req, res, next) => {
    let countOptions = {
        where: {},
        include: []
    };
    
    models.user.count()
    .then(count => {
        //Pagination
        const page_items = 5;
        //The page shown is in the query
        const pageno = Number(req.query.pageno) || 1;
        //Create String with HTML to render pagination buttons
        res.locals.paginate_control = paginate(count, page_items, pageno, req.url);

        const findOptions = {
            ...countOptions,
            order: [ ['points', 'DESC'] ],
            offset: page_items*(pageno-1),
            limit: page_items
        };

        return models.user.findAll(findOptions);
    })
    .then(users => {
        res.render('users/index', {users});
    })
    .catch(error => next(error));
};

// GET /users/:userId
exports.show = (req, res, next) => {
    const {user} = req;

    //Show magic methods
    //console.log(Object.keys(user.__proto__));
    
    req.user.getFollowedBy({where: {id: req.session.user.id}})
    .then(follower => {
        if(follower.length>0){
            req.user.followed = true;
        }
        req.user.getFollowing({where: {id: req.session.user.id}})
        .then(following => {

        })
    }) 
    .then( () => {
        req.user.getFollowedBy()
        .then(followers => {
            req.user.getFollowing()
            .then(following => {
                res.render('users/show', {user,followers,following});
            })
        })
        
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

// GET /users/:userId/edit
exports.edit = (req, res, next) => {

    const {user} = req;

    res.render('users/edit', {user});
};


// PUT /users/:userId
exports.update = (req, res, next) => {

    let {user} = req;
    let fields_to_update = [];
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;


    if(username){
        user.username  = username; // edition not allowed
        fields_to_update.push('username');
    }

    // ¿Cambio el password?
    if (password) {
        if(password===password2){
            console.log('Updating password');
            user.password = bCrypt.hashSync(password,10);
            fields_to_update.push('password');
        }else{
            req.flash('error','Passwords do not match');
            res.redirect('/goback');
        }
    }

    user.save({fields: fields_to_update})
    .then(user => {
        req.flash('success', 'User updated successfully.');
        res.redirect('/users/' + user.id);
    })
    .catch(Sequelize.ValidationError, error => {
        req.flash('error', 'There are errors in the form:');
        error.errors.forEach(({message}) => req.flash('error', message));
        res.render('users/edit', {user});
    })
    .catch(error => next(error));
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

// DELETE /users/:userId
exports.destroy = (req, res, next) => {

    req.user.destroy()
    .then(() => {

        // Deleting logged user.
        if (req.session.user && req.session.user.id === req.user.id) {
            // Close the user session
            delete req.session.user;
        }

        req.flash('success', 'User deleted successfully.');
        res.redirect('/goback');
    })
    .catch(error => next(error));
};

//PUT /users/:userId/follow
exports.follow = (req,res,next) => {
    let {user} = req;

    return user.addFollowedBy(req.session.user)
    .then(() => {
        models.user.findByPk(req.session.user.id)
        .then((me) => {
            me.addFollowing(user)
            .then(() => {
                res.redirect('/users/'+req.session.user.id);
            });
        });
    })
    .catch(error => {
        console.log(error);
    });
};

//PUT /users/:userId/unfollow
exports.unfollow = (req,res,next) => {
    let {user} = req;

    return user.removeFollowedBy(req.session.user)
    .then(() => {
        models.user.findByPk(req.session.user.id)
        .then((me) => {
            me.removeFollowing(user)
            .then(() => {
                res.redirect('/users/'+req.session.user.id);
            });
        });
    })
    .catch(error => {
        console.log(error);
    });
};

