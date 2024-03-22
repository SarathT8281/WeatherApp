const mongoose = require('mongoose');

const weatherDataSchema =  mongoose.Schema({
  location:{ type : String},
  temperature: {type: Number},
  humidity: {type: Number},
  wind :{type: Number},
  pressure : {type: Number},
  dateTime: {type: Number}, 
});

const WeatherData = mongoose.model('WeatherData', weatherDataSchema);

module.exports = WeatherData;

