import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Loading...");

    // Fake login check
    if (username === "nitya@gmail.com" && password === "1234567") {
      setTimeout(() => {
        setMessage("✅ Login Successful! Welcome back, " + username);
      }, 2000);
    } else {
      setTimeout(() => {
        setMessage("❌ Login Failed! Please check your details.");
      }, 2000);
    }

    // reset fields
    setUsername("");
    setPassword("");
  };

  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        backgroundColor: "#f8f5f2",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#6f4e37", marginBottom: "20px" }}>Login</h2>

        {/* Username */}
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label style={{ fontWeight: "bold" }}>Username</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label style={{ fontWeight: "bold" }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#6f4e37",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        {/* Message */}
        {message && (
          <p style={{ marginTop: "15px", color: "#6f4e37", fontWeight: "bold" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
