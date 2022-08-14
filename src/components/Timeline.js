import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
// import { ReactTagify } from 'react-tagify';

import Like from "./like";
import MakePost from "./MakePost";
import Menu from "./menu/index.jsx";

export default function Timeline() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [havePost, setHavePost] = useState(false);
  const token = localStorage.getItem("token");
  const tagStyle = {
    color: "#FFFFFF",
    cursor: "pointer",
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    const promise = axios.get("http://localhost:4000/timeline", config);

    promise.then((res) => {
      setPosts(res.data);
      {
        posts.length > 0 ? setHavePost(true) : setHavePost(false);
      }
    });
    promise.catch((err) => {
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
      navigate("/");
    });
  }, [posts]);

  return (
    <>
      <Menu />
      <ScreenName>
        <h2>timeline</h2>
      </ScreenName>
      <MakePost />
      {/* <Like></Like> */}
      {havePost ? (
        // <ReactTagify colors={'#FFFFFF'}> // </ReactTagify>
        <Container>
          {posts.map((each, index) => (
            <div key={index} className="post">
              <div className="avatar">
                <div className="avatarImg">
                  <img src={each.foto} />
                </div>
                <div className="icon">
                  <IoHeartOutline color="#ffffff" size="22px" />
                </div>
                <h3>13 likes</h3>
              </div>
              <div className="postDescription">
                <h1>{each.name}</h1>
                <h2>{each.description}</h2>
                {/* <h3>{each.url}</h3> */}
              </div>
            </div>
          ))}
        </Container>
      ) : (
        <NoPost>
          <h3>THERE ARE NO POSTS YET</h3>
        </NoPost>
      )}
    </>
  );
}

const ScreenName = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: #333333;
  display: flex;
  align-items: center;
  padding: 0 0 0 11px;
  h2 {
    font-weight: 700;
    font-size: 33px;
    color: #ffffff;
  }
  @media (min-width: 600px) {
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  .post {
    background-color: #171717;
    width: 100vw;
    height: 30vh;
    display: flex;
    margin: 20px 0 20px 0;
    font-family: "Oswald";
    font-weight: 700;
  }
  .avatar {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin-top: 10px;
      color: white;
      font-size: 12px;
      font-family: "Lato";
    }
  }
  .avatarImg {
    margin: 10px 0 0 0;
    img {
      width: 45px;
      height: 45px;
      border-radius: 26.5px;
    }
  }
  .icon {
    height: 20px;
    width: 20px;
    margin: 15px 0 0 0;
  }
  .postDescription {
    width: 75%;
    h1 {
      color: #ffffff;
      font-size: 25px;
      margin: 12px 0 0 0;
      font-family: "Lato";
    }
    h2 {
      font-size: 20px;
      color: #b7b7b7;
      font-family: "Lato";
      margin: 7px 0 0 0;
    }
  }
  @media (min-width: 600px) {
    .post {
      width: 611px;
      height: 276px;
      border-radius: 16px;
    }
    .avatarImg {
      margin: 25px 0 0 0;
    }
    .postDescription {
      h1 {
        margin: 23px 0 0 0;
      }
    }
  }
`;
const NoPost = styled.div`
  background-color: #333333;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  text-align: center;
  h3 {
    font-family: "Lato";
    color: #b7b7b7;
    font-size: 20px;
    margin: 20px 0 0 0;
  }
`;
