function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Page</h2>

      <input type="email" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      <button>Login</button>

      <p>Sign Up | Forgot Password</p>

      <button>Continue with Google</button>
    </div>
  );
}

export default Login;