function Navbar({ exactPlace, handleLogout,toggleTheme }) {
  return (
    <div style={{
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
       flexWrap: "wrap",
       gap: "10px",
       padding: "15px 25px",
       background: "rgba(255,255,255,0.15)",
       backdropFilter: "blur(12px)",
       borderRadius: "15px",
       color: "white",
       boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
}}>
      <h2>Weather Nexus</h2>
      <p>{exactPlace}</p>
      <button onClick={toggleTheme}>🌙 Theme</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;