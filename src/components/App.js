import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext.js";
import Signin from "./signin";
import Timeline from "./Timeline.js";
import Signup from "./signup";

export default function App() {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");

  return (
    <UserContext.Provider value={{ token, setToken, image, setImage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
