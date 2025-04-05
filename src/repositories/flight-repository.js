const CrudRepository = require('./crud-repositories');

const {flight} = require('../models');

class FlightRepository extends CrudRepository {
    constructor () {
        super(flight);
    }
}

module.exports = FlightRepository