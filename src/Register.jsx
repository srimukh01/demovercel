import axios from "axios";
import { useState } from "react";

function Reg() {
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const changeName = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const submit = async () => {
    try {
      const res = await axios.post("http://localhost:8000/reg", data);
      alert(res.data);
    } catch (xyz) {
      alert(xyz.response.data);
    }
  };
  return (
    <>
      <h1>This is App</h1>
      <input
        onChange={changeName}
        name="username"
        placeholder="Enter the username"
      ></input>
      <input
        onChange={changeName}
        name="email"
        placeholder="Enter the email"
      ></input>
      <input
        onChange={changeName}
        name="password"
        placeholder="create password"
      ></input>
      <button onClick={submit}>register</button>
    </>
  );
}
export default Reg;