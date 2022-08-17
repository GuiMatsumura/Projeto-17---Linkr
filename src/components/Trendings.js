import styled from "styled-components";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import HashtagContext from "../contexts/HashtagContext.js";

export default function Trending() {
  const navigate = useNavigate();
  const [trending, setTrending] = useState([]);
  const [controlEffect, setControlEffect] = useState(false);

  const { controlTrending, setControlTrending } = useContext(HashtagContext);

  function navigateTag(tag) {
    setControlTrending(!controlTrending);
    navigate(`/hashtag/${tag.name}`);
  }

  useEffect(() => {
    const promise = axios.get("http://localhost:4000/trending");

    promise.then((res) => {
      setTrending(res.data);
    });
    promise.catch(() => {
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
      navigate("/");
    });
  }, [controlEffect]);

  return (
    <Trendings>
      <h1>trending</h1>
      <div></div>
      <ul>
        {trending.map((each, index) => (
          <li key={index} onClick={() => navigateTag(each)}>
            # {each.name}
          </li>
        ))}
      </ul>
    </Trendings>
  );
}

const Trendings = styled.div`
  position: absolute;
  left: 70vw;
  top: 20px;
  background-color: #171717;
  width: 301px;
  height: 406px;
  border-radius: 16px;
  margin-left: 50px;
  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #ffffff;
    padding: 9px 0 0 16px;
  }
  div {
    border: 1px solid #484848;
    margin-top: 12px;
  }
  li {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: #ffffff;
    margin-bottom: 5px;
    cursor: pointer;
  }
  ul {
    width: auto;
    height: auto;
    padding: 30px 0 30px 16px;
    text-align: start;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
