const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);



app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    //BAd Testing Code
    const {City,Airport} = require('./models');

    const city = await City.findByPk(7);
    //console.log(city);

  //const airport= await city.createAirport({name:'Hublli Airport',code:'BLR2'});

  //const blrAirports = await city.getAirports();
 // console.log(blrAirports);

 const HbAirport = await Airport.findByPk(6);
 console.log(HbAirport);
 //await city.removeAirport(HbAirport)

});
