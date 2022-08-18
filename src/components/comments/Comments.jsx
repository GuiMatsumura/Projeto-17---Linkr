import { Container, BoxComment, InputBox, StyledSend } from "./CommentStyle";
import UserContext from "../../contexts/UserContext";
import CommentContext from "../../contexts/CommentContext";
import { useContext, useState } from "react";
import axios from "axios";
export default function Comments({ image, userId, postId, token }) {
  const { clickComment, setClickComment } = useContext(CommentContext);
  const [newComment, setNewComment] = useState("");

  async function handleComment() {
    console.log(newComment);
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
      setNewComment("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <div>
        <img src={image} alt="Profile" />
        <InputBox>
          <input
            type="text"
            placeholder="write a comment..."
            autoFocus
            onChange={(e) => setNewComment(e.target.value)}
          />
          <StyledSend onClick={handleComment} />
        </InputBox>
      </div>
    </Container>
  );
}
