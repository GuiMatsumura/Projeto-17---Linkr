import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { IoHeartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { Header, Body, LeftBox, RightBox, Post, Posts, Navbar } from "./style"
import Trending from "../Trendings";
import Menu from "../menu";
import UserContext from "../../contexts/UserContext.js";

export default function UserProfile() {
  const { id } = useParams()
  const { token, userId } = useContext(UserContext);
  const defaultToken = token ? token : localStorage.getItem("token");
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${defaultToken}`,
      },
    };

    const LINK_API = `https://back-linkr-10.herokuapp.com/user/${id}`;
    const request = axios.get(LINK_API, config);
    request.then(response => {
      const { data } = response;
      setUserData(data);
    });
    request.catch(err => {
      console.log(err.response)
    });
  }, []);

/* const idUser = localStorage.getItem("userId")
  console.log(idUser) */
  
  return (
    <>
    <Navbar>
      <Menu />
    </Navbar>
      <Body>
        {!userData ? <></> :
          <Header>
            <img src={userData.profile[0].photo}
              alt={"user avatar"} />
            <h1>{userData.profile[0].username}'s posts</h1>
          </Header>}

        <Posts>
          {!userData ? <></> :

            userData.posts.map(({ description, numberOfLikes, url }, index) => (

              <Post id={index}>
                <LeftBox>
                  <img src={userData.profile[0].photo}
                    alt={"user avatar"} />
                  <IoHeartOutline className="likeButton" />
                  <h1>{numberOfLikes ? numberOfLikes : "0"} likes</h1>
                </LeftBox>

                <RightBox>
                  <h1>{userData.profile[0].username}</h1>
                  <h2>{description}</h2>
                  <img src={"https://uploaddeimagens.com.br/images/003/979/184/original/Link.png?1660327757"} alt="" />
                </RightBox>
              </Post>
            ))}
        </Posts>
        <Trending />
      </Body>
    </>
  );
}