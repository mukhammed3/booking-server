/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const [regDone, setRegDone] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      );
      console.log(res.status);
      console.log(res.config);
      if (res.status === 200 && 201) {
        setRegDone(true);
      }
    } catch (err) {
      setErr(err.response.data);
    }
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.key === "Enter") {
      handleClick(e);
      console.log("Pressed");
    }
  };
  // console.log(err);

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          className="lInput"
          onKeyPress={handleKeypress}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="lInput"
          onKeyPress={handleKeypress}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="lInput"
          onKeyPress={handleKeypress}
        />
        <button onClick={handleClick} disabled={regDone} className="lButton">
          Register
        </button>
        {regDone && (
          <>
            <p>Registration is Complete! ♥</p>
            <Link to="/">Go to Home Page</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
