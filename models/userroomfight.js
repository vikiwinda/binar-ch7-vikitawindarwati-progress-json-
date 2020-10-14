'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRoomFight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserRoomFight.belongsTo(models.User);
      UserRoomFight.belongsTo(models.RoomFight);
    }
  };
  UserRoomFight.init({
    // id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserRoomFight',
  });
  return UserRoomFight;
};