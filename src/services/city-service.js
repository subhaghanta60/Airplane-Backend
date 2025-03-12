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





module.exports = {
    createCity
}