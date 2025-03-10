const {StatusCodes} = require("http-status-codes");
const {AirplaneService} = require('../services');

const {ErrorResponse, SuccessResponse} = require('../utils/common');

async function createAirplane(req,res) {

    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity: req.body.capacity
        })

        SuccessResponse.message = "Successfully Create an Airplane";
        SuccessResponse.data = airplane
        return res
                .status(StatusCodes.CREATED)
                .json (SuccessResponse)

    } catch(error){

        ErrorResponse.message = "Something Went wrong Creating  Airplane";
        ErrorResponse.error = error;
       
    
        return res  
                .status(error.statusCode)
                .json (ErrorResponse)
    }
}

module.exports = {
    createAirplane
}