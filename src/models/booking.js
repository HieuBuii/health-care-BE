"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User, {
        foreignKey: "patientId",
        targetKey: "id",
        as: "bookingData",
      });
      Booking.belongsTo(models.Allcode, {
        foreignKey: "timeType",
        targetKey: "keyMap",
        as: "timeBookingData",
      });
    }
  }
  Booking.init(
    {
      statusId: DataTypes.STRING,
      doctorId: DataTypes.INTEGER,
      patientId: DataTypes.INTEGER,
      date: DataTypes.STRING,
      timeType: DataTypes.STRING,
      token: DataTypes.STRING,
      reason: DataTypes.TEXT,
      file: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
