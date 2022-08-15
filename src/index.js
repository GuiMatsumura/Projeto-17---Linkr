import ReactDOM from "react-dom";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components/signup";
import DeleteModal from "./components/delete-modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));