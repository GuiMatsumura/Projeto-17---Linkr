import { LeftBox, RightBox, MainBox } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { setToken, setImage } = useContext(UserContext);

    function makeButton() {

        return (
            loading ? (
                <ThreeDots color="#FFFFFF" height={13} align='center' />
            ) : (
                'Sign in'
            )
        )
    }

    function submitData(event) {

        event.preventDefault();

        setLoading(true);

        const LINK_API = "http://localhost:4000/signin";

        const request = axios.post(LINK_API, {
            email,
            password,
        });

        request.then(response => {

            setToken(response.data.token);
            setImage(response.data.photo);
            navigate("/timeline");
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("image", response.data.photo);

        });

        request.catch(_err => {

            setLoading(false);
            alert("E-mail ou senha inválidos! Tente novamente.");

        });
    }


    return (

        <MainBox>
            <LeftBox>
                <h1>linkr</h1>
                <h2>save, share and discover
                    <br></br>
                    the best links on the web</h2>
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

                    <button type="submit">{makeButton()}</button>
                </form>

                <Link to={"/signup"}>
                    <h3>First time? Create an account!</h3>
                </Link>
            </RightBox>
        </MainBox>
    );
} 
