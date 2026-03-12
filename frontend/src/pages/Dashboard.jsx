import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/forecast";
import AirQuality from "../components/AirQuality";
import WeatherMap from "../components/WeatherMap";
import Favorites from "../components/Favorites";

function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [position, setPosition] = useState([13.0827, 77.5877]);
  const [exactPlace, setExactPlace] = useState("");
  const [forecast, setForecast] = useState([]);
  const [airQuality, setAirQuality] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const apiKey = "334b3697a2aff78841bca99839ddf13d";

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  const fetchForecast = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    const daily = data.list.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );

    setForecast(daily);
  };

  const fetchAirQuality = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    const data = await response.json();

    setAirQuality(data.list[0]);
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    setWeather(data);
    setPosition([lat, lon]);

    fetchForecast(lat, lon);
    fetchAirQuality(lat, lon);

    const placeResponse = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );

    const placeData = await placeResponse.json();

    setExactPlace(
      placeData.address.village ||
      placeData.address.hamlet ||
      placeData.address.town ||
      placeData.address.suburb ||
      placeData.address.city ||
      "Unknown Location"
    );
  };
  const addFavorite = () => {
  if (weather && !favorites.includes(weather.name)) {
    const updated = [...favorites, weather.name];

    setFavorites(updated);

    localStorage.setItem("favorites", JSON.stringify(updated));
  }
};

  const fetchWeatherByCity = async () => {
    if (!city) return;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found");
      return;
    }

    fetchWeatherByCoords(data.coord.lat, data.coord.lon);
  };
    const fetchWeatherByCityName = async (cityName) => {
    const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
  );

    const data = await response.json();

    fetchWeatherByCoords(data.coord.lat, data.coord.lon);
};

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherByCoords(
        position.coords.latitude,
        position.coords.longitude
      );
    });
  }, []);
   useEffect(() => {
  const saved = localStorage.getItem("favorites");

  if (saved) {
    setFavorites(JSON.parse(saved));
  }
}, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:darkMode
        ? "linear-gradient(135deg,#1f1c2c,#928dab)"
        : "linear-gradient(135deg,#4facfe,#00f2fe)",
        padding: "20px"
      }}
    >
      <Navbar exactPlace={exactPlace} handleLogout={handleLogout} toggleTheme={() => setDarkMode(!darkMode)} />

      <div
     style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "25px",
    marginBottom: "25px"
  }}
>
  <input
    type="text"
    placeholder="Enter city"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    style={{
      padding: "12px 18px",
      width: "280px",
      maxWidth: "90%",
      borderRadius: "30px",
      border: "none",
      outline: "none",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      fontSize: "15px"
    }}
  />

  <button
    onClick={fetchWeatherByCity}
    style={{
      padding: "12px 18px",
      borderRadius: "50%",
      border: "none",
      background: "#2c3e50",
      color: "white",
      cursor: "pointer",
      fontSize: "18px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
    }}
  >
    🔍
  </button>
</div>
      <Favorites
           favorites={favorites}
        fetchWeatherByCityName={fetchWeatherByCityName}
      />

      <WeatherCard weather={weather} exactPlace={exactPlace}  addFavorite={addFavorite} />

      <AirQuality airQuality={airQuality} />

      <Forecast forecast={forecast} />

      <WeatherMap
        position={position}
        fetchWeatherByCoords={fetchWeatherByCoords}
      />
    </div>
  );
}

export default Dashboard;