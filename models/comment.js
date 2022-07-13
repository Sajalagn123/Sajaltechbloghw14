// Setting up connections such as sequelize
const sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnection');

//Data model for comments users can make
const Comment = sequelizeConnection.define('comment', {

    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: sequelize.TEXT,
        allownull: false,
    },

    post_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: 'Post',
            key: 'id',
        }
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
    timestamps: false,
    freezeTableName: true,
    modelName: 'comments',
    underscored: true
});

//Exporting Comment data
module.exports = Comment;