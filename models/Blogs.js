const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogs extends Model { }

Blogs.init(
  {
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id',
      },
    },
    blog_title: {
      //STRING is capped at 255 characters
      type: DataTypes.STRING,
      allowNull: false,
    },
    blog_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    creation_date: {
      type: DataTypes.DATEONLY,
      //'YYYY-MM-DD'
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogs',
  }
);

module.exports = Blogs;
