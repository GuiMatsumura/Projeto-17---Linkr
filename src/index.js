import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components/signup";

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));