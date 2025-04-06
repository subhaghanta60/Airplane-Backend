const {Sequelize}= require('sequelize')
const CrudRepository = require('./crud-repositories');

const {flight,Airplane,Airport,City} = require('../models');

class FlightRepository extends CrudRepository {
    constructor () {
        super(flight);
    }
    async getAllFlights(filter,sort){
        
        const response = await flight.findAll({
            where:filter,
            order:sort,
            include: [
                {
                    model:Airplane,
                    require:true,
                    as:'airplaneDetails'
                },
                {
                    model:Airport,
                    require:true,
                    as:"departureAirport",
                   
                    on: {
                        col1:Sequelize.where(Sequelize.col('flight.departureAirportId'), '=',Sequelize.col('departureAirport.code'))

                    },
                    include: {
                        model:City,
                        required:true
                    }
                   
                },
                {
                    model:Airport,
                    require:true,
                    as:"arivalAirport",
                   
                    on: {
                        col1:Sequelize.where(Sequelize.col('flight.arivalairportId'), '=',Sequelize.col('arivalAirport.code'))

                    },
                    include: {
                        model:City,
                        required:true
                    }
                   
                },
             ],
        });
        
        return response;
    }
}

module.exports = FlightRepository