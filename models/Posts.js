const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class posts extends Model {}

posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ImageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Caption: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);

module.exports = posts;