import { useState, useEffect } from "react";
import axios from "axios";
import { IoHeartOutline } from "react-icons/io5";
import { Header, Body, LeftBox, RightBox, Post, Trending, Posts } from "./style"

export default function UserProfile() {
  const [userData, setUserData] = useState(false);
  useEffect(() => {
    /* const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    }; */

    const LINK_API = "http://localhost:4000/user/1";
    const request = axios.get(LINK_API); //botar o header
    request.then(response => {
      const { data } = response;
      setUserData(data)
      console.log(data)
      console.log(data.profile[0].photo)
    });
    request.catch(err => {
      console.log(err.response)
    });
  }, []);

  return (
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
                <h1>{numberOfLikes} likes</h1>
              </LeftBox>

              <RightBox>
                <h1>{userData.profile[0].username}</h1>
                <h2>{description}</h2>
                <img src={"https://uploaddeimagens.com.br/images/003/979/184/original/Link.png?1660327757"} alt="" />
              </RightBox>
            </Post>
          ))}
      </Posts>

      <Trending>
        <h1>Trending</h1>
        <div></div>
        <ul>
          <li>#javascript</li>
          <li>#react</li>
          <li>#react-native</li>
          <li>#material</li>
          <li>#web-dev</li>
          <li>#mobile</li>
          <li>#css</li>
          <li>#html</li>
          <li>#node</li>
          <li>#sql</li>
        </ul>
      </Trending>
    </Body>
  );
}

/* userActivity.activity.map(() => ())
(({description, numberOfLikes, postLiked, postOwner, url}, index) =>()) */

{/* <Post>
          <LeftBox>
            <img src={"https://cdn.myanimelist.net/images/characters/10/480353.jpg"}
              alt={"user avatar"} />
            <IoHeartOutline className="likeButton" />
            <h1>13 likes</h1>
          </LeftBox>

          <RightBox>
            <h1>Nanakuza Nazuna</h1>
            <h2>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</h2>
            <img src={"https://uploaddeimagens.com.br/images/003/979/184/original/Link.png?1660327757"} alt="" />
          </RightBox>
        </Post> */}