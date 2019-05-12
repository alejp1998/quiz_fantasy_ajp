// Definition of the Session model:
module.exports = (sequelize,DataTypes) => {
    return sequelize.define(
        'session',
        {
            sid: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            expires: DataTypes.DATE,
            data: DataTypes.STRING(50000)
        });
};