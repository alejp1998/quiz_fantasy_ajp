//Definition of the tips Model
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tip',
        {
            text: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Tip text must not be empty."}}
            },
            accepted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        });
};