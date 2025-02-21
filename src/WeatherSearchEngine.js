import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearchEngine() {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2×.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button type="submit">Search </button>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}

        <div>Temperature: {Math.round(weather.temperature)}℃</div>
        <div> Description: {weather.description}</div>
        <div> Humidity:{weather.humidity}%</div>
        <div>Wind:{weather.wind}km/h</div>
        <div>
          <img src={weather.icon} alt={weather.description} />
        </div>
      </div>
    );
  } else {
    return form;
  }
}
