'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId'
      });
      this.belongsTo(models.Airport, {
        foreignKey:'departureAirportId'
      });
      this.belongsTo(models.Airport, {
        foreignKey:'arivalAirportId'
      });

    }
  }
  flight.init({
    flightNumber: {
      type:DataTypes.STRING,
      allowNull:false

    } ,
    airplaneId:  {
      type:DataTypes.INTEGER,
      allowNull:false

    } ,
    departureAirportId: {
      type:DataTypes.STRING,
      allowNull:false

    } ,
    arivalAirportId:  {
      type:DataTypes.STRING,
      allowNull:false

    } ,
    arrivalTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false

    } ,
    departureTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    boardingGate:  {
      type:DataTypes.STRING,

    } ,
    totalSeats: {
      type:DataTypes.INTEGER,
      allowNull:false

    } 
  }, {
    sequelize,
    modelName: 'flight',
  });
  return flight;
};