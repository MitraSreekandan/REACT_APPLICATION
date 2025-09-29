import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        backgroundColor: "#f8f5f2",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      {/* Header */}
      <header style={{ backgroundColor: "#6f4e37", padding: "20px" }}>
        <h1 style={{ color: "white", textAlign: "center", margin: 0 }}>
          About Us
        </h1>
      </header>

      {/* Content */}
      <main style={{ maxWidth: "800px", margin: "40px auto", textAlign: "center" }}>
        <h2 style={{ color: "#6f4e37" }}>☕ Our Story</h2>
        <p style={{ lineHeight: "1.8", marginTop: "20px" }}>
          Coffee Corner began with a simple thought: *a warm cup of coffee can
          make anyone’s day a little better*.  
        </p>
        <p style={{ lineHeight: "1.8" }}>
          What started as two friends brewing coffee in a small kitchen has now
          grown into a cozy little café where people come to share laughter,
          ideas, and quiet moments. We’re not just about coffee; we’re about
          people.  
        </p>

        <h3 style={{ color: "#6f4e37", marginTop: "30px" }}>🌱 What We Believe</h3>
        <p style={{ lineHeight: "1.8" }}>
          We believe in slow mornings, kind conversations, and coffee made with
          care. Every bean we use is chosen carefully, and every cup is brewed
          with love — just the way we’d make it for our closest friends.  
        </p>

        <h3 style={{ color: "#6f4e37", marginTop: "30px" }}>💡 Our Promise</h3>
        <p style={{ lineHeight: "1.8" }}>
          At Coffee Corner, you’ll always find a friendly smile, a cozy seat,
          and a drink that feels like home. Whether it’s your first visit or
          your hundredth, we want you to feel like family.  
        </p>
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
        <p style={{ margin: 0 }}>© 2025 Coffee Corner — Brewed with ❤️ and shared with friends.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
