import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components/signup";
import UserProfile from "./components/userProfile";
import Trending from "./components/trending";

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="teste" element={<Trending />}/>
        </Routes>
      </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));