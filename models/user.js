// Setting up connections such as sequelize
const sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnection');
const brcypt = require('bcrypt');

//Setting up user data model
const User = sequelizeConnection.define('user', {

    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            len: [5, 60]
        }
    },
    password: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            len: [5, 60]
        }
    }

}, {
    sequelize: sequelizeConnection,
    timestamps: false,
    freezeTableName: true,
    modelName: 'users',
    underscored: true
});

//Encrypting password
User.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.password, 10);
})

//Exporting User data
module.exports = User;