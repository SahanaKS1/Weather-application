function AirQuality({ airQuality }) {
  if (!airQuality) return null;

  return (
    <div style={{
        background: "rgba(255,255,255,0.2)",
        backdropFilter: "blur(12px)",
        padding: "20px",
        margin: "20px auto",
        width: "250px",
        borderRadius: "15px",
        color: "white"

    }}>
      <h3>Air Quality Index</h3>
      <p>AQI Level: {airQuality.main.aqi}</p>
    </div>
  );
}

export default AirQuality;