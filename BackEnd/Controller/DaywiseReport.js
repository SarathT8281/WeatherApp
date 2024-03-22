

const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/forecast', async (req, res) => {
  try {
    const city = 'Karivellur';
    const apiKey = '1e2e90f40bf808addcd7e7a70f94c324';
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const forecastData = response.data.list;

    const forecastForFiveDays = forecastData.filter((forecast, index) => index % 8 === 0 && index < 40);

    const formattedForecastData = forecastForFiveDays.map(forecast => ({
      day: new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
      temperature: forecast.main.temp,
      weather: forecast.weather[0].description
    }));

    res.json(formattedForecastData);
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;


