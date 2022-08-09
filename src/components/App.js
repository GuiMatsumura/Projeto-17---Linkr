import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./Timeline.js";
// import Signup from "./components/signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/timeline"} element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}
