module.exports = function (sequelize, dataTypes) {
    var Burger = sequelize.define('burgers', {
        // Here are the columns of the table
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        burger_name: {
            type: dataTypes.STRING
        },
        devoured: {
            type: dataTypes.BOOLEAN,
            defaultValue: false
        },
    })
    return Burger;
};