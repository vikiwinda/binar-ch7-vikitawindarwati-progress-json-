'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomFight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    RoomFight.belongsTo(models.Fight);
    RoomFight.belongsTo(models.Room);

    RoomFight.belongsToMany(models.User, { through: 'UserRoomFight' });
    RoomFight.hasMany(models.UserRoomFight);
      // define association here
    }
  };
  RoomFight.init({
    // UserId: DataTypes.INTEGER,
    // FightId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RoomFight',
  });
  return RoomFight;
};