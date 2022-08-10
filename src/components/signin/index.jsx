import { LeftBox, RightBox, MainBox } from "./style"
import { Link } from "react-router-dom";
import { useState } from "react";
//import axios from "axios";
//import { ThreeDots } from 'react-loader-spinner';

export default function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function makeButton() {

        return 'Sign in';

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
                <form>
                    <input
                        type="email"
                        disabled={false}
                        placeholder="e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />

                    <input
                        type="password"
                        disabled={false}
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
