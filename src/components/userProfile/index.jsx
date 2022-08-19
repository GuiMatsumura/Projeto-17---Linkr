import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { IoHeartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { Header, Body, LeftBox, RightBox, Post, Posts, Navbar } from "./style";
import Trending from "../Trendings";
import Menu from "../menu";

export default function UserProfile() {
  const { id } = useParams();
  const [userData, setUserData] = useState(false);
  /* const { token } = useContext(UserContext);
  const defaultToken = token ? token : localStorage.getItem("token"); */
  useEffect(() => {
    /* const config = {
      headers: {
        Authorization: `Bearer ${defaultToken}`,
      },
    }; */

    const LINK_API = `https://back-linkr-10.herokuapp.com/user/${id}`;
    /* const LINK_API = `https://back-linkr-10.herokuapp.com/user/${id}`; */
    const request = axios.get(LINK_API);
    request.then((response) => {
      const { data } = response;
      setUserData(data);
      console.log(data);
      console.log(data.profile[0].photo);
    });
    request.catch((err) => {
      console.log(err.response);
    });
  }, []);

  return (
    <>
      <Navbar>
        <Menu />
      </Navbar>
      <Body>
        {!userData ? (
          <></>
        ) : (
          <Header>
            <img src={userData.profile[0].photo} alt={"user avatar"} />
            <h1>{userData.profile[0].username}'s posts</h1>
          </Header>
        )}

        <Posts>
          {!userData ? (
            <></>
          ) : (
            userData.posts.map((each, index) => (
              <Post id={index}>
                <LeftBox>
                  <img src={userData.profile[0].photo} alt={"user avatar"} />
                  <IoHeartOutline className="likeButton" />
                  <h1> likes</h1>
                </LeftBox>

                <RightBox>
                  <h1>{userData.profile[0].username}</h1>
                  <h2>{each.description}</h2>
                  <a href={each.url}>
                    <div className="metadata">
                      <div className="metadataInfo">
                        <h2>{each.metadataTitle}</h2>
                        <h3>{each.metadataDescription}</h3>
                        <h4>{each.url}</h4>
                      </div>
                      <div className="metadataImg">
                        <img src={each.metadataImg} />
                      </div>
                    </div>
                  </a>
                </RightBox>
              </Post>
            ))
          )}
        </Posts>
        <Trending />
      </Body>
    </>
  );
}
