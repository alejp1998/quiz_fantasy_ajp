// Definition of the Quiz model:
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('quiz',
        {
            course: {
                type: DataTypes.INTEGER,
                defaultValue: false
            },
            subject: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Subject must not be empty"}}
            },
            desc: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Description must not be empty"}}
            },
            question: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Question must not be empty"}}
            },
            answer: {
                type: DataTypes.INTEGER,
                validate: {notEmpty: {msg: "Answer must not be empty"}}
            },
            answer1: DataTypes.STRING,
            answer2: DataTypes.STRING,
            answer3: DataTypes.STRING,
            answer4: DataTypes.STRING
        });
};
