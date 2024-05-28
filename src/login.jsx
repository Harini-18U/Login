import React from "react";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleLogin = () => {
    if (email === "test@gmail.com" && password === "12345678") {
      setMessage("Login successful");
    } else {
      setMessage("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="container">
      <h2>Login Page</h2>

      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      
      <button onClick={handleLogin}>Login</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginPage;