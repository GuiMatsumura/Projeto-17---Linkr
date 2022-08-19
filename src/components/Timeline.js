import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../contexts/UserContext.js";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { ReactTagify } from "react-tagify";
import HashtagContext from "../contexts/HashtagContext.js";
import Search from "./Search.js";
import Like from "./like";
import MakePost from "./MakePost";
import Menu from "./menu/index.jsx";
import Trending from "./Trendings.js";
import DeleteModal from "./delete-modal/index.jsx";
import Comments from "./comments/Comments.jsx";
import CommentContext from "../contexts/CommentContext.js";

export default function Timeline() {
  const navigate = useNavigate();

  const { token, userId, image } = useContext(UserContext);
  const { clickComment, setClickComment } = useContext(CommentContext);
  const defaultToken = token ? token : localStorage.getItem("token");
  const defaultImage = image ? image : localStorage.getItem("image");
  const defaultUserId = userId ? userId : localStorage.getItem("userId");
  const [posts, setPosts] = useState([]);
  const [havePost, setHavePost] = useState(false);
  const [controlEffect, setControlEffect] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [newDescription, setNewDescription] = useState("");
  const [inputIndex, setInputIndex] = useState();
  const [commentIndex, setCommentIndex] = useState();
  const [inputDisable, setInputDisable] = useState(false);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [display, setDisplay] = useState("flex");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(false);

  function navigateTag(tag) {
    const hashtag = tag.replace("#", "");
    navigate(`/hashtag/${hashtag}`);
  }

  function getWindowWidth() {
    const { innerWidth: width } = window;
    return width;
  }
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    windowWidth < 600 ? setDisplay("flex") : setDisplay("none");
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const config = {
    headers: {
      Authorization: `Bearer ${defaultToken}`,
    },
  };

  useEffect(() => {
    const promise = axios.get("http://localhost:4000/timeline", config);

    promise.then((res) => {
      setPosts(res.data);
      posts.length > 0 ? setHavePost(true) : setHavePost(false);
    });
    promise.catch((err) => {
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
      navigate("/");
    });
  }, [controlEffect]);

  useEffect(() => {
    posts.length > 0 ? setHavePost(true) : setHavePost(false);
  }, [posts]);

  function editDescription(index) {
    setShowInput(!showInput);
    setInputIndex(index);
    setNewDescription("");
  }

  function showComments(index) {
    setClickComment(true);
    setCommentIndex(index);
  }

  function modalOnOff() {
    if (isModalOpen) setIsModalOpen(false);
    if (!isModalOpen) setIsModalOpen(true);
  }

  function getIdFromPost(id, state) {
    setIdToDelete(id);
    modalOnOff(state);
  }

  async function handleKey(event, id) {
    if (event.key === "Enter") {
      setInputDisable(!inputDisable);
      const body = {
        description: newDescription,
        postId: id,
      };
      try {
        await axios.put("http://localhost:4000/post", body, config);
        setShowInput(false);
        setNewDescription("");
        setInputDisable(false);
        setControlEffect(!controlEffect);
      } catch (error) {
        setInputDisable(false);
        alert("Não foi possível salvar suas alterações");
      }
    }
    if (event.key === "Escape") {
      console.log(showInput);
      setShowInput(!showInput);
      setNewDescription("");
    }
  }

  if (!isModalOpen) {
    return (
      <AllContent>
        <Menu />
        <Search display={display} />
        <ScreenName>
          <h2>timeline</h2>
        </ScreenName>

        <MakePost
          setControlEffect={setControlEffect}
          controlEffect={controlEffect}
        />
        {/* <Like></Like> */}
        {havePost ? (
          <SuperContainer>
            <Container>
              {posts.map((each, index) => (
                <FullPost key={index}>
                  <div className="post">
                    <div className="avatar">
                      <div className="avatarImg">
                        <img src={each.photo} />
                      </div>
                      <div className="icon">
                        {/* <Like postId={each.id} /> */}
                        <h3>13 likes</h3>
                      </div>
                      <div className="comment">
                        <AiOutlineComment onClick={() => showComments(index)} />
                        <h3>{each.numberOfComments} comments</h3>
                      </div>
                    </div>
                    <div className="postDescription">
                      <Link to={`/user/${each.userId}`}>
                        <h1>{each.name}</h1>
                      </Link>

                      {showInput && index === inputIndex ? (
                        <input
                          autoFocus
                          value={
                            newDescription ? newDescription : each.description
                          }
                          onKeyDown={(event) => handleKey(event, each.id)}
                          onChange={(e) => setNewDescription(e.target.value)}
                          disabled={inputDisable}
                        />
                      ) : (
                        <ReactTagify
                          colors={"#ffffff"}
                          tagClicked={(tag) => navigateTag(tag)}
                        >
                          <h2>{each.description}</h2>
                        </ReactTagify>
                      )}
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
                    </div>
                    {each.userId === Number(defaultUserId) ? (
                      <>
                        <StyledEdit onClick={() => editDescription(index)} />
                        <StyledDelete />
                      </>
                    ) : null}
                  </div>
                  {clickComment && index === commentIndex ? (
                    <Comments
                      image={defaultImage}
                      userId={defaultUserId}
                      token={defaultToken}
                      postId={each.id}
                      ownerId={each.userId}
                    />
                  ) : null}
                </FullPost>
              ))}
            </Container>
            <Trending />
          </SuperContainer>
        ) : (
          <NoPost>
            <h3>THERE ARE NO POSTS YET</h3>
          </NoPost>
        )}
      </AllContent>
    );
  } else {
    return <DeleteModal modalOnOff={modalOnOff} id={idToDelete} />;
  }
}

const AllContent = styled.div`
  background-color: #333333;
  height: 100vh;
`;

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
    font-family: "Oswald";
    width: 611px;
    text-align: start;
  }
  @media (min-width: 600px) {
    justify-content: center;
  }
`;
const FullPost = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  .post {
    width: 611px;
    height: 276px;
    background-color: #171717;
    border-radius: 16px;
    display: flex;
    margin-top: 40px;
    font-family: "Oswald";
    font-weight: 700;
    position: relative;
  }
  .avatar {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    height: 32px;
    width: 100%;
    margin: 15px 0 0 0;
  }
  .comment {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    color: #ffffff;
    font-size: 24px;
    h3 {
      font-size: 11px;
    }
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
    .metadata {
      height: 155px;
      display: flex;
      align-items: center;
      margin: 10px 0 0 0;
      width: 100%;
      background-color: #171717;
      border: 1px solid #4d4d4d;
      border-radius: 11px;
      .metadataInfo {
        height: 130px;
        width: 80%;
        margin: 0 0 0 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2 {
          font-family: "Lato";
          font-size: 16px;
          color: #cecece;
        }
        h3 {
          font-family: "Lato";
          font-size: 11px;
          color: #9b9595;
          margin: 4px 0;
          overflow: hidden;
        }
        h4 {
          font-family: "Lato";
          font-size: 11px;
          color: #cecece;
          margin: 4px 0;
          overflow: hidden;
        }
      }
      .metadataImg {
        img {
          width: 154px;
          height: 155px;
          border-radius: 0px 12px 13px 0px;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .post {
      width: 100vw;
      height: 270px;
      border-radius: 0px;
    }
    .avatarImg {
      margin: 25px 0 0 0;
    }
    .postDescription {
      h1 {
        margin: 23px 0 0 0;
      }
      .metadata {
        height: 115px;
        .metadataInfo {
          height: 110px;
        }
        .metadataImg {
          img {
            width: 95px;
            height: 115px;
          }
        }
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
const SuperContainer = styled.div`
  display: flex;
  background-color: #333333;
  position: relative;
`;

const StyledEdit = styled(FiEdit2)`
  position: absolute;
  color: white;
  top: 24px;
  right: 50px;
`;

const StyledDelete = styled(FiTrash)`
  position: absolute;
  color: white;
  top: 24px;
  right: 20px;
`;
