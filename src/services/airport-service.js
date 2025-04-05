const { AirportRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes'); 

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        
        const airport = await airportRepository.create(data);
        return airport;

    } catch (error) {
        console.log(error);

        if (error.name == 'SequelizeValidationError') {

            let explanations = [];
            error.errors.forEach((err) => {
                explanations.push(err.message);
            });
           
           
           throw new AppError(explanations, StatusCodes.BAD_REQUEST)
        }
        throw new AppError("Cannot Create a new airport Objects", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirports(){
    try{
        const airports = await airportRepository.getAll();

        return airports;
    }catch(error){
        

        throw new AppError("Cannot Fetch Data of all the airports", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirport(id){
    try{
        const airport = await airportRepository.get(id);

        return airport;
    }catch(error){
        

        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you Requested is not present", error.statusCode)
        }
        throw new AppError("Cannot Fetch Data of the airports", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyAirport(id){
    try{
        const response = await airportRepository.destroy(id);

        return response;

    }catch(error){
        console.log(error);
        
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you Requested is not present", error.statusCode)
        }
        throw new AppError("Cannot Delete Data of the airports", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}