const {StatusCodes} = require("http-status-codes");
const {FlightService} = require('../services');

const {ErrorResponse, SuccessResponse} = require('../utils/common');

async function createFlight(req,res) {

    try {
        const flight = await FlightService.createFlight({
            flightNumber : req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arivalAirportId: req.body.arivalAirportId,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price,
            departureTime: req.body.departureTime,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
        })

        SuccessResponse.message = "Successfully Create an airport";
        SuccessResponse.data = flight;
        return res
                .status(StatusCodes.CREATED)
                .json (SuccessResponse)

    } catch(error){

        ErrorResponse.message = "Something Went wrong Creating  airport";
        ErrorResponse.error = error;
       
    
        return res  
                .status(error.statusCode)
                .json (ErrorResponse)
    }
}



module.exports = {
    createFlight
}