import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext.js";
import HashtagContext from "../contexts/HashtagContext.js";
import CommentContext from "../contexts/CommentContext.js";
import Signin from "./signin";
import Timeline from "./Timeline.js";
import Signup from "./signup";
import Hashtag from "./Hashtag.js";
import UserProfile from "./userProfile/index.jsx";

export default function App() {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState();
  const [username, setUsername] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [controlTrending, setControlTrending] = useState(false);
  const [controlHashtag, setControlHashtag] = useState(false);
  const [clickComment, setClickComment] = useState(false);
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        image,
        setImage,
        userId,
        setUserId,
        username,
        setUsername,
      }}
    >
      <HashtagContext.Provider
        value={{
          controlTrending,
          setControlTrending,
          controlHashtag,
          setControlHashtag,
        }}
      >
        <CommentContext.Provider
          value={{ clickComment, setClickComment, allComments, setAllComments }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/user/:id" element={<UserProfile />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/hashtag/:hashtag" element={<Hashtag />} />
            </Routes>
          </BrowserRouter>
        </CommentContext.Provider>
      </HashtagContext.Provider>
    </UserContext.Provider>
  );
}
