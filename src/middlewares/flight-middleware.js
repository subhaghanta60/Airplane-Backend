const { StatusCodes } = require("http-status-codes");

const {ErrorResponse} = require('../utils/common');
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        ErrorResponse.message= "Something Went wrong Creating Flight";

               
        ErrorResponse.error =new AppError(['Flight Number not found in the upcoming request in the correct form'],StatusCodes.BAD_REQUEST) ;
        
        return res  
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.airplaneId){
        ErrorResponse.message= "Something Went wrong Creating Flight";

               
        ErrorResponse.error =new AppError(['Airplane  not found in the upcoming request in the correct form'],StatusCodes.BAD_REQUEST) ;
        
        return res  
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message= "Something Went wrong Creating Flight";

               
        ErrorResponse.error =new AppError(['Depurture Airport  not found in the upcoming request in the correct form'],StatusCodes.BAD_REQUEST) ;
        
        return res  
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.arivalAirportId){
        ErrorResponse.message= "Something Went wrong Creating Flight";

               
        ErrorResponse.error =new AppError(['Arrival Airport  not found in the upcoming request in the correct form'],StatusCodes.BAD_REQUEST) ;
        
        return res  
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message= "Something Went wrong Creating Flight";

               
        ErrorResponse.error =new AppError(['Arrival Time   not found in the upcoming request in the correct form'],StatusCodes.BAD_REQUEST) ;
        
        return res  
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.price){
        ErrorResponse.message= "Something Went wrong Creating Flight";

               
        ErrorResponse.error =new AppError(['Flight Price  not found in the upcoming request in the correct form'],StatusCodes.BAD_REQUEST) ;
        
        return res  
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.departureTime){
        ErrorResponse.message= "Something Went wrong Creating Flight";

               
        ErrorResponse.error =new AppError(['Depurture Time  not found in the upcoming request in the correct form'],StatusCodes.BAD_REQUEST) ;
        
        return res  
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.totalSeats){
        ErrorResponse.message= "Something Went wrong Creating Flight";

               
        ErrorResponse.error =new AppError(['No Of Seats in Flights not found in the upcoming request in the correct form'],StatusCodes.BAD_REQUEST) ;
        
        return res  
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}