const express = require('express');
const { AirplaneController } = require('../../controllers');

const {AirplaneMiddlewares} = require('../../middlewares');


const router = express.Router();

router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

// /api/vi/airplanes GET

router.get('/',AirplaneController.getAirplanes);
// /api/vi/airplanes/id GET

router.get('/:id',AirplaneController.getAirplane);
router.delete('/:id',AirplaneController.destroyAirplane);

module.exports = router;