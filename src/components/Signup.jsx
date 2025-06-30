import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if user already exists
    const existingUser = JSON.parse(localStorage.getItem('signupUser'));
    if (existingUser && existingUser.email === formData.email) {
      alert('Account already exists with this email. Please login.');
      return;
    }
    // Basic validation example
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Save user data to localStorage (for demo purposes only, not secure for real apps)
    localStorage.setItem('signupUser', JSON.stringify({
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password
    }));
    alert(`Account created for ${formData.fullName}!`);
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    // Redirect to login after signup
    navigate('/login');
  };

  return (
    <div className="auth_container">
      <div className="auth_form_box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
          <p className="switch_link" onClick={() => navigate('/login')} style={{cursor:'pointer'}}>Already have an account? Login</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
