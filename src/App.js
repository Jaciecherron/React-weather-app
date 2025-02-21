import "./App.css";
import WeatherSearchEngine from "./WeatherSearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearchEngine />
      <br />
      Coded by{" "}
      <a href="https://github.com/Jaciecherron" target="_blank" rel="noreferrer">
        Jacie Spivey </a>
      hosted on Netlify
    </div>
  );
}
