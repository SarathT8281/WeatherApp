import React, { useEffect, useState } from 'react';
import './WeatherDayWise.css';
import axios from 'axios';

function WeatherDayWise() {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/forecast'); 
        setForecastData(response.data);
        console.log('Forecast data:', response.data);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchForecastData();
  }, []);
  const groupedForecastData = forecastData.reduce((acc, curr) => {
    const day = curr.day;
    if (!acc[day]) {
      acc[day] = curr;
    }
    return acc;
  }, {});

  return (
    <div className='WeatherDayWise-main'>
      {Object.values(groupedForecastData).map((day, index) => (
        <div key={index} className="WeatherDayWise-day">
          <p>{day.day}</p>
          <h3>{day.temperature}°</h3>
          <p>{day.weather}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherDayWise;

