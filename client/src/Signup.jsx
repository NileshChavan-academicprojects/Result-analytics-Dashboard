import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/register", { name, email, password })
      .then((result) => {
        console.log("Registration Success:", result);
        navigate("/login");
      })
      .catch((err) => console.error("Registration Error:", err));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('/5.jpg')", // ✅ Adjust path if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.71)", // ✅ Light background for readability
          padding: "20px",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name" style={{ fontWeight: "bold" }}>
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="name"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ced4da",
                marginTop: "5px",
              }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ fontWeight: "bold" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ced4da",
                marginTop: "5px",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password" style={{ fontWeight: "bold" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ced4da",
                marginTop: "5px",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#28a745",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Register
          </button>
          <p style={{ textAlign: "center", marginTop: "15px" }}>
            Already have an Account?
          </p>
          <Link
            to="/login"
            style={{
              display: "block",
              textAlign: "center",
              backgroundColor: "#f8f9fa",
              padding: "10px",
              borderRadius: "4px",
              textDecoration: "none",
              color: "#000",
              border: "1px solid #ced4da",
            }}
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
