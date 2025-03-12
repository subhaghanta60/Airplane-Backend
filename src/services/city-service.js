const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes'); 

const cityRepository = new CityRepository();

async function createCity(data){
    try {
        
        const city = await cityRepository.create(data);
        return city;

    } catch (error) {

        if (error.name == 'SequelizeUniqueConstraintError' || 'SequelizeValidationError') {

            let explanations = [];
            error.errors.forEach((err) => {
                explanations.push( err.message);
            });
           
           
           throw new AppError(explanations, StatusCodes.BAD_REQUEST)
        }
        throw new AppError("Cannot create a new City Object" , StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

async function destroyCity(id){
    try{
        const response = await cityRepository.destroy(id);

        return response;

    }catch(error){

        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The City you Requested is not present", error.statusCode)
        }
        throw new AppError("Cannot Delete Data of the City", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}






module.exports = {
    createCity,
    destroyCity
}