const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes'); 

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        
        const flight = await flightRepository.create(data);
        return flight;

    } catch (error) {
        console.log(error);

        if (error.name == 'SequelizeValidationError') {

            let explanations = [];
            error.errors.forEach((err) => {
                explanations.push(err.message);
            });
           
           
           throw new AppError(explanations, StatusCodes.BAD_REQUEST)
        }
        throw new AppError("Cannot Create a new Flight Objects", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}




module.exports = {
    createFlight
}