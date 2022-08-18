import { Container, BoxComment, InputBox, StyledSend } from "./CommentStyle";
import UserContext from "../../contexts/UserContext";
import CommentContext from "../../contexts/CommentContext";
import { useContext } from "react";
export default function Comments({ image }) {
  console.log(image);
  const { clickComment, setClickComment } = useContext(CommentContext);
  return (
    <Container>
      <div>
        <img src={image} alt="Profile" />
        <InputBox>
          <input type="text" placeholder="write a comment..."></input>
          <StyledSend onClick={() => setClickComment(!clickComment)} />
        </InputBox>
      </div>
    </Container>
  );
}
