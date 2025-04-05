const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes'); 

const {Op} =require('sequelize');

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

async function getAllflights(query){

    let customFliter = {};
    let sortFliter=[];
    const endingTripTime="23:59:59";

    if(query.trips){
        //trips=MUM-DEL
        [departureAirportId,arrivalAirportId] = query.trips.split("-");

      
        customFliter.departureAirportId=departureAirportId;
        customFliter.arivalAirportId=arrivalAirportId;

    }
    if(query.price){
        [minPrice, maxPrice]=query.price.split("-");
       customFliter.price = {
        [Op.between]:[minPrice,(maxPrice==undefined) ? 20000 :maxPrice]
       }
    }

    if(query.travellers){
        customFliter.totalSeats = {
            [Op.gte]:query.travellers
        }
    }
    if(query.tripDate){
        customFliter.departureTime = {
           // [Op.gte]:query.tripDate
           [Op.between]: [query.tripDate, query.tripDate+endingTripTime]
        }
    }
    if(query.sort){
        
        const params= query.sort.split(",");
        const sortFliters = params.map((param)=> param.split("_"));
        sortFliter =sortFliters;
       
    }
   
   
    try{
        const flights= flightRepository.getAllFlights(customFliter,sortFliter);
       
        return flights;

    }catch{
        console.log(error);
       
        throw new AppError("Cannot Fetch Data of all the flights", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}




module.exports = {
    createFlight,
    getAllflights,
}