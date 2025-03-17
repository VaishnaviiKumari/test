import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.password2)
      newErrors.password2 = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Signup Successful!");
      navigate("/login"); // Redirect to Login
    }
  };

  return (
    <div className="container">
      <h1>Sign-Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Re-enter your password"
          value={formData.password2}
          onChange={(e) => setFormData({ ...formData, password2: e.target.value })}
        />
        {errors.password2 && <p className="error">{errors.password2}</p>}

        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
