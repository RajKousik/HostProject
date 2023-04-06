import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err)

  return (
    <div className="register">
      <div className="card">
        <div className="left">

          <h1>Welcome to Connectify!</h1>
          <p>
            A social media website clone that allows users to create profiles, connect with friends, share posts, and interact with other users.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange} required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange} required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange} required
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange} required
            />
            <div className="error-red">
            {err && err}
            </div>
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
