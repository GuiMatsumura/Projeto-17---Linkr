import { LeftBox, RightBox, MainBox } from "./style"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function submitData(event) {
    event.preventDefault();
    setLoading(true);
  
    const LINK_API = "https://back-linkr-10.herokuapp.com/signup";
    const request = axios.post(LINK_API, {
      email,
      username,
      password,
      photo
    });
    request.then(response => {
      navigate("/");
      alert('Cadastrado com sucesso!');
    });
    request.catch(err => {
      console.log(err.response);
      setLoading(false);
      alert("E-mail ja cadastrado. Tente novamente.");
    });
  }

  return (
    <MainBox>
      <LeftBox>
        <h1>linkr</h1>
        <h2>save, share and discover<br></br>the best links on the web</h2>
      </LeftBox>

      <RightBox>
        <form onSubmit={submitData}>
          <input
            type="email"
            disabled={loading ? true : false}
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />

          <input
            type="password"
            disabled={loading ? true : false}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />

          <input
            type="text"
            disabled={loading ? true : false}
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />

          <input
            type="text"
            disabled={loading ? true : false}
            placeholder="picture url"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required />


          <button type="submit">
            {loading ? (
              <ThreeDots color="#FFFFFF" height={13} align='center' />
            ) : (
              'Sign up'
            )}
          </button>
        </form>
        <Link to={"/"}>
          <h3>Switch back to log in</h3>
        </Link>
      </RightBox>
    </MainBox>
  );
}