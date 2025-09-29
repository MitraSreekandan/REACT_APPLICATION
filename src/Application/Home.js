import React from "react";

const Home = () => {
  return (
    <div style={{ fontFamily: "Georgia, serif", backgroundColor: "#f8f5f2", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#6f4e37", padding: "20px" }}>
        <h1 style={{ color: "white", textAlign: "center", margin: 0 }}>
          ☕ Coffee Corner
        </h1>
      </header>

      {/* Welcome Section */}
      <main style={{ textAlign: "center", padding: "50px 20px" }}>
        <h2 style={{ color: "#6f4e37" }}>Welcome to Coffee Corner!</h2>
        <p style={{ maxWidth: "500px", margin: "20px auto", lineHeight: "1.6" }}>
          Take a break and enjoy a warm cup of freshly brewed coffee.
          Whether you’re here to study, chat, or just relax, we’ve got the
          perfect blend waiting for you.
        </p>
        <button
          style={{
            padding: "12px 25px",
            backgroundColor: "#6f4e37",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Explore Menu
        </button>
      </main>

      {/* Footer */}
      <footer
        style={{
          marginTop: "40px",
          backgroundColor: "#6f4e37",
          color: "white",
          textAlign: "center",
          padding: "15px",
        }}
      >
        <p style={{ margin: 0 }}>© 2025 Coffee Corner. Brewed with ❤️</p>
      </footer>
    </div>
  );
};

export default Home;
