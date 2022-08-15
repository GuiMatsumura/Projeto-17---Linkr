import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { ReactTagify } from 'react-tagify';
import HashtagContext from '../contexts/HashtagContext.js';

import Like from './like';
import MakePost from './MakePost';
import Menu from './menu/index.jsx';
import Trending from './Trendings.js';

export default function Timeline() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [havePost, setHavePost] = useState(false);
  const [controlEffect, setControlEffect] = useState(false);

  const { hashtagClicked, setHashtagClicked } = useContext(HashtagContext);

  function navigateTag(tag) {
    setHashtagClicked(tag.replace('#', ''));
    navigate(`/hashtag/${tag.replace('#', '')}`);
  }

  useEffect(() => {
    const promise = axios.get('http://localhost:6007/timeline');

    promise.then((res) => {
      setPosts(res.data);
      posts.length > 0 ? setHavePost(true) : setHavePost(false);
      havePost ? console.log('ok') : setControlEffect(!controlEffect);
    });
    promise.catch((err) => {
      alert(
        'An error occured while trying to fetch the posts, please refresh the page'
      );
      navigate('/');
    });
  }, [controlEffect]);

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
        <SuperContainer>
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
                  <ReactTagify
                    colors={'#ffffff'}
                    tagClicked={(tag) => navigateTag(tag)}
                  >
                    <h2>{each.description}</h2>
                  </ReactTagify>
                  <a href={each.url}>
                    <div className="metadata">
                      <div className="metadataInfo">
                        <h2>Um titulo legal</h2>
                        <h3>uma descrição legal</h3>
                        <h4>um link doidao</h4>
                      </div>
                      <div className="metadataImg">
                        <img src={each.foto} />
                      </div>
                    </div>
                  </a>
                  {/* <h3>{each.url}</h3> */}
                </div>
              </div>
            ))}
          </Container>
          {/* trendi */}
          <Trending />
        </SuperContainer>
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
    font-family: 'Oswald';
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
      font-family: 'Lato';
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
      font-family: 'Lato';
    }
    h2 {
      font-size: 20px;
      color: #b7b7b7;
      font-family: 'Lato';
      margin: 7px 0 0 0;
    }
    .metadata {
      display: flex;
      align-items: center;
      margin: 10px 0 0 0;
      width: 100%;
      height: 100px;
      background-color: #171717;
      border: 1px solid #4d4d4d;
      border-radius: 11px;
      .metadataInfo {
        width: 80%;
        height: 80px;
        margin: 0 0 0 5px;
        h2 {
          font-family: 'Lato';
          font-size: 16px;
          color: #cecece;
        }
        h3 {
          font-family: 'Lato';
          font-size: 11px;
          color: #9b9595;
          margin: 4px 0 0 0;
        }
        h4 {
          font-family: 'Lato';
          font-size: 11px;
          color: #cecece;
          margin: 4px 0 0 0;
        }
      }
      .metadataImg {
        img {
          width: 100px;
          height: 100px;
          border-radius: 0px 12px 13px 0px;
        }
      }
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
    font-family: 'Lato';
    color: #b7b7b7;
    font-size: 20px;
    margin: 20px 0 0 0;
  }
`;
const SuperContainer = styled.div`
  display: flex;
  background-color: #333333;
  position: relative;
`;
