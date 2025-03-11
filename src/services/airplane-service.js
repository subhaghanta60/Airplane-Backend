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
        throw new AppError("Cannot Create a new Airplane Objects", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirplanes(){
    try{
        const airplanes = await airplaneRepository.getAll();

        return airplanes;
    }catch(error){
        throw new AppError("Cannot Fetch Data of all the airplanes", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports = {
    createAirplane,
    getAirplanes
}