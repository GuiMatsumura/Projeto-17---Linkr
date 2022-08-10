import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));
