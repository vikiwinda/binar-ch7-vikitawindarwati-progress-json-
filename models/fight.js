'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fight.belongsToMany(models.User, {
        through: 'Rooms',
        as: 'users',
        foreignKey: 'FightId',
        otherKey: 'UserId'
      })
    }
  };
  Fight.init({
    Player1_round_1: DataTypes.STRING,
    Player2_round_1: DataTypes.STRING,
    Player1_round_2: DataTypes.STRING,
    Player2_round_2: DataTypes.STRING,
    Player1_round_3: DataTypes.STRING,
    Player2_round_3: DataTypes.STRING,
    score: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Fight',
  });
  return Fight;
};