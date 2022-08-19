import { Container, BoxComment, InputBox, StyledSend } from "./CommentStyle";
import UserContext from "../../contexts/UserContext";
import CommentContext from "../../contexts/CommentContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
export default function Comments({ image, userId, postId, token }) {
  const { clickComment, setClickComment } = useContext(CommentContext);
  const [newComment, setNewComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [commentsControl, setCommentsContol] = useState(false);
  useEffect(async () => {
    const promise = await axios.get(`http://localhost:4000/comments/${postId}`);
    setAllComments(promise.data);
  }, [commentsControl]);
  console.log(allComments);
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

  return (
    <Container>
      {allComments.map((each, index) => (
        <BoxComment key={index}>
          <img src={each.photo} alt="" />
          <div>
            <div>
              <h1>{each.username}</h1>
              <h3>
                {each.userId === Number(userId) ? "• post's author" : null}
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
