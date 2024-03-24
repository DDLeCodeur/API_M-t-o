import React, { useEffect, useState } from 'react';
import fetchWeather from '../services/fetchWeather';
import './WeatherApp.css';

function WeatherApp() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState('');

    useEffect(() => {
        fetchWeather(city)
            .then(data => setWeatherData(data))
    }, [city]);

    return (
        <div>
            <input 
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                placeholder="Quelle ville veux tu météorologizé"
            />
            {weatherData ? (
                <div>
                    <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    <p className='soulign'>{weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                </div>
            ) : (
                <div>Trouve la météo d'une ville</div>
            )}
        </div>
    );
}

export default WeatherApp;
