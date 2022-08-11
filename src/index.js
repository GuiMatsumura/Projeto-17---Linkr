import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components/signup";

import DeleteModal from "./components/delete-modal";

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/teste" element={<UserProfile />} /> */}
        <Route path="/teste" element={<DeleteModal />} />
        </Routes>
      </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));