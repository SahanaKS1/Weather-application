function WeatherCard({ weather, exactPlace }) {
  if (!weather || !weather.main) return null;

  return (
    <div style={{
        background: "rgba(255,255,255,0.2)",
        backdropFilter: "blur(15px)",
        padding: "25px",
        borderRadius: "20px",
        width: "90%",
        maxWidth: "320px",
        margin: "20px auto",
        color: "white",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
}}
      >
      <h2>Nearest Area: {weather.name}</h2>
      <p>Exact Place: {exactPlace}</p>
      <p>Latitude: {weather.coord.lat}</p>
      <p>Longitude: {weather.coord.lon}</p>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="icon"
      />

      <p>Temperature: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Pressure: {weather.main.pressure} hPa</p>
      <p>Rainfall: {weather.rain ? weather.rain["1h"] + " mm" : "No rain"}</p>
    </div>
  );
}

export default WeatherCard;