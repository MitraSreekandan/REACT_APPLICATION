import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback, " + formData.name + "!");
    setFormData({ name: "", email: "", feedback: "" }); // reset form
  };

  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        backgroundColor: "#f8f5f2",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <h2 style={{ color: "#6f4e37", textAlign: "center" }}>
        We’d love your Feedback!
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "20px auto",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Name */}
        <label style={{ display: "block", marginBottom: "10px" }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </label>

        {/* Email */}
        <label style={{ display: "block", marginBottom: "10px" }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </label>

        {/* Feedback */}
        <label style={{ display: "block", marginBottom: "10px" }}>
          Feedback:
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="4"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "12px 20px",
            backgroundColor: "#6f4e37",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
            marginTop: "10px",
          }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
