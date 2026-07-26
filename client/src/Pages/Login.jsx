import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://leaddesk-mini-wiv8.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      alert("Login Successful");
      navigate("/admin");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto" }}>
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;