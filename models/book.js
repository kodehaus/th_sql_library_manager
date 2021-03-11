'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: 
      {notEmpty: {
        msg: 'Title can not be empty. Please provide a value for the "title".'
      },
      notNull:{
        msg: 'The value for the "title" can not be null.'
      }}
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: 
      {notEmpty: {
        msg: 'Author can not be empty. Please provide a value for the "author".'
      },
      notNull:{
        msg: 'The value for the "author" can not be null.'
      }}
    },
    genre: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};