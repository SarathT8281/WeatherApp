const express = require ('express');
const weatherData = require('./Controller/WeatherData');
const DaywiseReport = require('./Controller/DaywiseReport');
const { CreateUser } = require('./Controller/UserSignup');
const toCompareUser = require('./Controller/UserLogin');
const router = express.Router();


router.route('/weather').get(weatherData)
router.route('/forecast').get(DaywiseReport)

router.route('/signup').post(CreateUser)
router.route('/login').post(toCompareUser)




module.exports =router
