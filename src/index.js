import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import UserContext from "./contexts/UserContext";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Menu from "./components/menu";


function App() {

  const [token, setToken] = useState("");
  const [image, setImage] = useState("");

  return (
    <UserContext.Provider value={{ token, setToken, image, setImage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/timeline" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));
