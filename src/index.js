const express=require('express');

const {serverConfig}=require('./config');
const apiRoutes=require('./routes');

const app=express();

app.use(express.json());       //registers a middleware for all upcoming routes, it helps to parse
                               // the incoming json request body
app.use(express.urlencoded({extended:true}));   //makes sure to read the url encoded stuff

app.use('/api',apiRoutes);

app.listen(serverConfig.PORT,async()=>{
    console.log(`Successfully started the server on PORT : ${serverConfig.PORT}`);
    //Logger.info("Successfully started the server","root",{});

    //bad code alert
    const {City,Airport}=require('./models');
    //const bengaluru=await City.findByPk(1);
    //console.log(bengaluru);
    //const airport=await Airport.create({name:'Kempegowda Airport',code:'BLR',city_id:1});
    /*const dbairport=await bengaluru.createAirport({name:'Huballi Airport',code:'HBL'});
    console.log(dbairport);
    const airportsInBlr=await bengaluru.getAirports();
    console.log(airportsInBlr);
    const hbairport=await Airport.findByPk(12);
    console.log(hbairport);
    await bengaluru.removeAirports(hbairport);*/
    /*await City.destroy({
        where:{
            id:1
        }
    });*/
    //onst city=await City.findByPk(3);
    //await city.createAirport({name:'Chennai Airport',code:'CHN'});
    await City.destroy({
        where:{
            id:3
        }
    });
});