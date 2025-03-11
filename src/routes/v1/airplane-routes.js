const express = require('express');
const { AirplaneController } = require('../../controllers');

const {AirplaneMiddlewares} = require('../../middlewares');


const router = express.Router();

router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

// /api/vi/airplanes GET

router.get('/',AirplaneController.getAirplanes);

module.exports = router;