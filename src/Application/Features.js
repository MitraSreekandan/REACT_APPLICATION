import React from "react";

const Features = () => {
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
          What Makes Us Special
        </h1>
      </header>

      {/* Content */}
      <main style={{ maxWidth: "800px", margin: "40px auto", textAlign: "center" }}>
        <h2 style={{ color: "#6f4e37" }}>☕ The Coffee Corner Experience</h2>
        <p style={{ lineHeight: "1.8", marginTop: "20px" }}>
          At Coffee Corner, we don’t just serve coffee — we create little moments
          of comfort and connection. Here’s what our guests love most about us:
        </p>

        {/* Features List */}
        <div style={{ marginTop: "40px", textAlign: "left" }}>
          <h3 style={{ color: "#6f4e37" }}>🌱 Coffee with Care</h3>
          <p style={{ lineHeight: "1.8" }}>
            Every bean we brew is chosen with love. Freshly roasted, perfectly
            ground — so your cup always feels warm, rich, and special.
          </p>

          <h3 style={{ color: "#6f4e37" }}>🍰 A Place to Slow Down</h3>
          <p style={{ lineHeight: "1.8" }}>
            Life moves fast, but our café is designed for slowing down. Curl up
            with a book, chat with a friend, or simply enjoy a quiet moment with
            your favorite drink.
          </p>

          <h3 style={{ color: "#6f4e37" }}>🤝 Friendly Faces</h3>
          <p style={{ lineHeight: "1.8" }}>
            From your very first visit, we want you to feel at home. Our team
            knows that a smile and a kind word go just as far as a great latte.
          </p>

          <h3 style={{ color: "#6f4e37" }}>📶 Coffee + Connection</h3>
          <p style={{ lineHeight: "1.8" }}>
            Whether you’re working on a project, video calling a loved one, or
            just scrolling through, we’ve got cozy seats and free Wi-Fi waiting
            for you.
          </p>
        </div>
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
        <p style={{ margin: 0 }}>
          © 2025 Coffee Corner — Brewing coffee, comfort, and conversations.  
        </p>
      </footer>
    </div>
  );
};

export default Features;
