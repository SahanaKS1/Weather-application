function Favorites({ favorites, fetchWeatherByCityName }) {
  return (
    <div
      style={{
        margin: "20px auto",
        width: "80%",
        textAlign: "center"
      }}
    >
      <h3 style={{ color: "white" }}>Favorite Cities</h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {favorites.map((city, index) => (
          <button
            key={index}
            onClick={() => fetchWeatherByCityName(city)}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer"
            }}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Favorites;