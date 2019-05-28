// Definition of the Quiz model:
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('quiz',
        {
            choice: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            question: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Question must not be empty"}}
            },
            answer: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Answer must not be empty"}}
            },
            answer1: DataTypes.STRING,
            answer2: DataTypes.STRING,
            answer3: DataTypes.STRING
        });
};
