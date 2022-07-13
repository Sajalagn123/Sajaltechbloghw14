// Setting up connections such as sequelize
const sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnection');

//Data model for posts users can make
const Post = sequelizeConnection.define('post', {

    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    title: {
        type: sequelize.STRING,
        allowNull: false,
    },

    content: {
        type: sequelize.TEXT,
        allownull: false,
    },

    user_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: 'User',
            key: 'id',
        }
    }

}, {
    sequelize: sequelizeConnection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'posts',
    underscored: true
});

//Exporting Post data
module.exports = Post;