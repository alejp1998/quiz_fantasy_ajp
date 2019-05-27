"use strict";
// Definition of the User model:
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {notEmpty: {msg: "Username must not be empty."}}
        },
        password: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Password must not be empty."}},
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '0'
        },
        fails: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '0'
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return User;
};