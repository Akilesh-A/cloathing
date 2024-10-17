import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Signup.css";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!firstname) {
      newErrors.firstname = "First Name is required";
    }
    if (!lastname) {
      newErrors.lastname = "Last Name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const response = await fetch(process.env.REACT_APP_PRODUCT_API + "/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstname, lastname, email, password })
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response data:", data);

      // Redirect to login page with email and password
      navigate("/login", { state: { email, password } });

    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  return (
    <div className="container">
      <div id="login">
        <div className="container">
          <h1 className="section-header">Create Account</h1>
          <form id="form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                placeholder="First Name"
                id="first"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              {errors.firstname && <p className="error">{errors.firstname}</p>}
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Last Name"
                id="last"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              {errors.lastname && <p className="error">{errors.lastname}</p>}
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="createform">
              <button type="submit">CREATE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
