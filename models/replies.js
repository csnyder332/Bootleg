const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
class replies extends Model{}

replies.init(
    {
        id:{
         type:DataTypes.INTEGER,

        }
    }
)
module.exports=replies