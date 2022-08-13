import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components/signup";
import UserProfile from "./components/userProfile";
import DeleteModal from "./components/delete-modal";

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));