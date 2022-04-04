const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class likes extends Model {}

likes.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:"user",
                key:"id"
            }
        },
        comment_id:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references:{
                model:"comment",
                key:"id"
            }
        },
        post_id:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references:{
                model:"posts",
                key:"id"
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'likes',
    }
)
module.exports=likes