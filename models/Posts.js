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
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caption: {
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
    modelName: 'posts',
  }
);

module.exports = posts;