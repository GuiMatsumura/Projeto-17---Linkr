import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/signin";
import UserContext from "./contexts/UserContext";
import { useState } from 'react';

function App() {

  const [token, setToken] = useState("");

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));
