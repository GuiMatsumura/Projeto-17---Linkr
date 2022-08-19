import { Container, BoxComment, InputBox, StyledSend } from "./CommentStyle";
import UserContext from "../../contexts/UserContext";
import CommentContext from "../../contexts/CommentContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
export default function Comments({ image, userId, postId, token, ownerId }) {
  const { allComments, setAllComments } = useContext(CommentContext);
  const [newComment, setNewComment] = useState("");
  const [commentsControl, setCommentsContol] = useState(false);
  const [following, setFollowing] = useState([]);
  useEffect(async () => {
    const promiseComments = await axios.get(
      `http://localhost:4000/comments/${postId}`
    );
    const promiseFollow = await axios.get(
      `http://localhost:4000/following/${userId}`
    );
    console.log(...promiseFollow.data);
    setAllComments(promiseComments.data);
    setFollowing(promiseFollow.data);
  }, [commentsControl]);

  async function handleComment() {
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const body = {
      comment: newComment,
      postId,
      userId,
    };
    try {
      await axios.post("http://localhost:4000/comment", body, config);
      setCommentsContol(!commentsControl);
      setNewComment("");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(following);
  return (
    <Container>
      {allComments.map((each, index) => (
        <BoxComment key={index}>
          <img src={each.photo} alt="" />
          <div>
            <div>
              <h1>{each.username}</h1>
              <h3>
                {each.userId === Number(ownerId)
                  ? "• post's author"
                  : following.some((e) => e.accountFollowed === each.userId)
                  ? "• following"
                  : null}
              </h3>
            </div>
            <h2>{each.comment}</h2>
          </div>
        </BoxComment>
      ))}
      <div className="makeComment">
        <img src={image} alt="Profile" />
        <InputBox>
          <input
            type="text"
            placeholder="write a comment..."
            autoFocus
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <StyledSend onClick={handleComment} />
        </InputBox>
      </div>
    </Container>
  );
}
