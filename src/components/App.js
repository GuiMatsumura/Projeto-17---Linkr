import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext.js";
import HashtagContext from "../contexts/HashtagContext.js";
import Signin from "./signin";
import Timeline from "./Timeline.js";
import Signup from "./signup";
import Hashtag from "./Hashtag.js";

export default function App() {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState();
  const [hashtagClicked, setHashtagClicked] = useState("");
  const [controlTrending, setControlTrending] = useState(false);
  return (
    <HashtagContext.Provider
      value={{
        hashtagClicked,
        setHashtagClicked,
        controlTrending,
        setControlTrending,
      }}
    >
      <UserContext.Provider
        value={{
          token,
          setToken,
          image,
          setImage,
          userId,
          setUserId,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/hashtag/:hashtag" element={<Hashtag />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </HashtagContext.Provider>
  );
}
