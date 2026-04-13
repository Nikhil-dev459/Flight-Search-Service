const express=require('express');
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router=express.Router();

console.log("Inside Airplane Routes");

//api/v1/airplane ->POST
router.post('/',
            AirplaneMiddlewares.validateCreateRequest,
            AirplaneController.createAirplane);

//api/v1/airplane ->GET
router.get('/',
            AirplaneController.getAirplanes);

module.exports=router;

//api/v1/airplane/:id ->GET
router.get('/:id',
            AirplaneController.getAirplane);

//api/v1/airplane/:id ->DELETE
router.delete('/:id',
            AirplaneController.destroyAirplane);

//api/v1/airplanes/:id ->UPDATE
router.patch('/:id',
            AirplaneController.updateAirplane);

module.exports=router;