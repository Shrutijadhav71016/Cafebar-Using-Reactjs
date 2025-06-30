import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("signupUser"));
    if (
      user &&
      user.email === loginData.email &&
      user.password === loginData.password
    ) {
      localStorage.setItem("name", user.fullName);

      navigate("/menu");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="auth_container">
      <div className="auth_form_box">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={loginData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={loginData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
          <p
            className="switch_link"
            onClick={() => navigate("/signup")}
            style={{ cursor: "pointer" }}
          >
            Don't have an account? Sign up
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
