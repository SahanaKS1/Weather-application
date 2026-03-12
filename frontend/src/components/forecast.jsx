function Forecast({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        flexWrap: "nowrap",
        overflowX: "auto",
        marginTop: "20px",
        padding: "10px"

 
    }}>
      {forecast.map((day, index) => (
        <div
          key={index}
          style={{
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(12px)",
            padding: "15px",
            borderRadius: "15px",
            color: "white",
            minWidth: "120px",
            textAlign: "center",
            flexShrink: 0
          }}
        >
          <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
          <p>{day.main.temp} °C</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;