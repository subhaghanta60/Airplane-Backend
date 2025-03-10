const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes'); 

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        
        const airplane = await airplaneRepository.create(data);
        return airplane;

    } catch (error) {

        if (error.name == 'SequelizeValidationError') {

            let explanations = [];
            error.errors.forEach((err) => {
                explanations.push(err.message);
            });
           
           
           throw new AppError(explanations, StatusCodes.BAD_REQUEST)
        }
        throw new AppError("SomeIssue", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports = {
    createAirplane
}