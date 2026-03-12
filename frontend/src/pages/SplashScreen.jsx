import { auth, provider } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged  
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLogin(true);
    }, 5000);
     onAuthStateChanged(auth, (user) => {
       if (user) {
          window.location.href = "/dashboard";
    }
  });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
        alt="logo"
        style={{
          width: showLogin ? "100px" : "220px",
          transition: "all 2s ease",
          opacity: 0.25
        }}
      />

      {showLogin && (
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
            width: "350px",
            textAlign: "center",
            marginTop: "30px"
          }}
        >
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid #ccc"
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "90%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid #ccc"
            }}
          />

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "12px",
              background: "#0077ff",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Login
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
              fontSize: "14px"
            }}
          >
            <a href="#">Sign Up</a>
            <a href="#">Forgot Password?</a>
          </div>

          <button
            onClick={handleGoogle}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Continue with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default SplashScreen;