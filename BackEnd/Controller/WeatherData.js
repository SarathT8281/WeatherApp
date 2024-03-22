

const express = require('express');
const WeatherData = require('../Schema/WeatherDetails');
const axios = require('axios');

const weatherData = async (req, res) => {
  try {
    const city = 'Mumbai';
    const api_key = "1e2e90f40bf808addcd7e7a70f94c324";
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`;

    const response = await axios.get(url);

    const weatherData = {
      location: response.data.city.name,
      temperature: response.data.list[0].main.temp,
      humidity: response.data.list[0].main.humidity, 
      wind: response.data.list[0].wind.speed, 
      pressure: response.data.list[0].main.pressure,
      dateTime: response.data.list[0].dt,
      hourly: response.data.list.map(entry => ({ temperature: entry.main.temp }))
    };

    const newWeatherData = new WeatherData(weatherData);

    await newWeatherData.save();

    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = weatherData;


