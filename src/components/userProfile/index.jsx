import { useState } from "react";
import axios from "axios";
import { IoHeartOutline } from "react-icons/io5";
import { Header, Body, LeftBox, RightBox, Post, Trending, Posts } from "./style"

export default function UserProfile() {

  return (
    <Body>
      <Header>
        <img src={"https://cdn.myanimelist.net/images/characters/10/480353.jpg"}
          alt={"user avatar"} />
        <h1>Nanakuza Nazuna's posts</h1>
      </Header>

      <Posts>
        <Post> {/* div principal do post */}
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
        </Post>

        <Post> {/* div principal do post */}
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
        </Post>

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







