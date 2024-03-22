
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Details from '../DetailsPage/Details';
import WeatherUpdate from '../WeatherUpdate/WeatherUpdate';
import OtherUpdates from '../OtherUpdates/OtherUpdates';
import WeatherDayWise from '../WeatherDayWise/WeatherDayWise';

function Home() {
  return (
    <div className='flex'>
      <Navbar/>
      <div className="contents">
        <Details/>
        <WeatherUpdate /> 
        <WeatherDayWise/>
        </div>
        <div>
        <OtherUpdates/>
        </div>
       
      
    </div>
  );
}

export default Home;
