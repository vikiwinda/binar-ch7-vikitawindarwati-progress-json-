'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Fight.belongsToMany(models.User, {
      //   through: 'Rooms',
      //   as: 'users',
      //   foreignKey: 'FightId',
      //   otherKey: 'UserId'
      // })
      Room.belongsToMany(models.Fight, { through: 'RoomFight' });
      Room.hasMany(models.RoomFight);
    }
  };
  Room.init({
    room_id: DataTypes.STRING,
    Player1: DataTypes.STRING,
    Player2: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};