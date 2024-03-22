import React, { useEffect, useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import './OtherUpdates.css';

function OtherUpdates() {
  const [weatherData, setWeatherData] = useState(null);
  const city = 'Cherrapunji';
  const api_key = "1e2e90f40bf808addcd7e7a70f94c324";
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
        console.log('Weather data:', response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);


  const getRainChance = () => {
    if (!weatherData) return 0;

   
    return weatherData.list[0].rain ? weatherData.list[0].rain['3h'] : 0;
  };

  const getPressure = () => {
    if (!weatherData) return 0; 
    return weatherData.list[0].main.pressure;
  };

  const getWindSpeed = () => {
    if (!weatherData) return 0; 
    return weatherData.list[0].wind.speed;
  };

  return (
    <div className='ou-main'>
      <div className="ou-list">
        <div className="separate">
          <h4>Rain Chance</h4>
          <p>Today Rain Chance</p>
          <h1>{getRainChance()}%</h1>
        </div>
        <div className="chart-container">
          <Doughnut
            data={{
              labels: ['Rain', 'No Rain'],
              datasets: [{
                data: [getRainChance(), 100 - getRainChance()],
                backgroundColor: ['#36A2EB', '#FFCE56']
              }]
            }}
            options={{
              plugins: {
                legend: {
                  display: false
                }
              }
            }}
          />
        </div>
      </div>
      <div className="ou-list">
        <div className="separate">
          <h4>Wind</h4>
          <p>Today Wind Speed</p>
          <h1>{getWindSpeed()} km/h</h1>
        </div>
        <div className="chart-container">
          <Doughnut
            data={{
              labels: ['Wind', 'No Wind'],
              datasets: [{
                data: [getWindSpeed(), 0], 
                backgroundColor: ['#FF6384', '#36A2EB']
              }]
            }}
            options={{
              plugins: {
                legend: {
                  display: false
                }
              }
            }}
          />
        </div>
      </div>
      <div className="ou-list">
        <div className="separate">
          <h4>Pressure</h4>
          <p>Today Pressure</p>
          <h1>{getPressure()} hpa</h1>
        </div>
        <div className="chart-container">
          <Doughnut
            data={{
              labels: ['Pressure', 'No Pressure'],
              datasets: [{
                data: [getPressure(), 0], 
                backgroundColor: ['#FFCE56', '#36A2EB']
              }]
            }}
            options={{
              plugins: {
                legend: {
                  display: false
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default OtherUpdates;
