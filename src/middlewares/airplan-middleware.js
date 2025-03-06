const { StatusCodes } = require("http-status-codes");

const {ErrorResponse} = require('../utils/common');

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message= "Something Went wrong Creating Airplane";
        ErrorResponse.error ={explanation: `Model Number not found in the upcomming request in the correct form`}
        return res  
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}