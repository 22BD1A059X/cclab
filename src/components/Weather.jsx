import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "3b72edccf9e05ea4da2a9a1146f38357"; 
  const CITY = "Hyderabad"; 
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-container p-3 bg-light border rounded">
      {loading ? (
        <p>Loading weather...</p>
      ) : weather ? (
        <div>
          <h4>{weather.name} Weather</h4>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      ) : (
        <p>Failed to load weather data.</p>
      )}
    </div>
  );
};

export default Weather;