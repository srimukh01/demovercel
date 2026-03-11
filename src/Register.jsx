import axios from "axios";
import { useState } from "react";

function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeName = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      const res = await axios.post(
        "https://cab-f9u5.onrender.com/register",
        data
      );
      alert(res.data);
    } catch (err) {
      alert(err.response?.data || "Error occurred");
    }
  };

  return (
    <>
      <h1>Register</h1>

      <input
        onChange={changeName}
        name="username"
        placeholder="Enter username"
      />

      <input
        onChange={changeName}
        name="email"
        placeholder="Enter email"
      />

      <input
        type="password"
        onChange={changeName}
        name="password"
        placeholder="Create password"
      />

      <button onClick={submit}>Register</button>
    </>
  );
}

export default Register;
