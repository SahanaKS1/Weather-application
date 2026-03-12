import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

function WeatherMap({ position, fetchWeatherByCoords }) {
  function LocationMarker() {
    useMapEvents({
      click(e) {
        fetchWeatherByCoords(e.latlng.lat, e.latlng.lng);
      },
    });

    return (
      <Marker position={position}>
        <Popup>
          Lat: {position[0]} <br />
          Lon: {position[1]}
        </Popup>
      </Marker>
    );
  }

  return (
    <div
      style={{
        width: "90%",
        margin: "20px auto",
        borderRadius: "15px",
        overflow: "hidden"
      }}
    >
      <MapContainer
        key={position.toString()}
        center={position}
        zoom={10}
        style={{
          height: "450px",
          width: "100%"
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default WeatherMap;