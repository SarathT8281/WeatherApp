import React, { useEffect, useState } from 'react';
import './WeatherUpdate.css';
import { IoLocationOutline } from 'react-icons/io5';
import { FaSuperpowers } from 'react-icons/fa';
import { WiRaindrop } from 'react-icons/wi';
import { WiCloudyWindy } from 'react-icons/wi';
import axios from 'axios';

function WeatherUpdate() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await axios.get(`http://localhost:5000/weather?lat=${latitude}&lon=${longitude}`);
          setWeatherData(response.data);
          setLoading(false);
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className='WeatherUpdate-main'>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <div className="WeatherUpdate-left">
            <div className="WeatherUpdate-location">
              <p><IoLocationOutline /> <span>{weatherData.location}</span> </p>
              <p>{new Date(weatherData.dateTime * 1000).toLocaleTimeString()}</p>
            </div>
            <div className="WeatherUpdate-status">
              <h1>{Math.round(weatherData.temperature)}°</h1>
              <p>{weatherData.main}</p>
            </div>
            <div className="WeatherUpdate-ot-status">
              <p> <FaSuperpowers /> <span>{weatherData.pressure}hpa</span> </p>
              <p> <WiRaindrop /> <span>{weatherData.humidity}%</span> </p>
              <p> <WiCloudyWindy /> <span>{weatherData.wind}km/h</span> </p>
            </div>
          </div>
          <div className="WeatherUpdate-temp">
            <div className="WeatherUpdate-temp-head">
              <p>Temperature</p>
              <h1>{weatherData ? Math.round(weatherData.temperature) : ''}°</h1> 
            </div>
            {weatherData && weatherData.hourly && weatherData.hourly.length > 0 && (
              <div className="WeatherUpdate-session-wind">
                {weatherData.hourly.slice(0, 4).map((hour, index) => (
                  <div key={index} className="WeatherUpdate-day">
                    <p>{index === 0 ? 'Morning' : index === 1 ? 'Afternoon' : index === 2 ? 'Evening' : 'Night'}</p>
                    <p>{Math.round(hour.temperature)}°</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherUpdate;

