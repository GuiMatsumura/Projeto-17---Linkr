import { useState } from "react";
import styled from "styled-components";
export default function MakePost() {
  const [disable, setDisable] = useState(false);
  const [buttonCtt, setButtonCtt] = useState("Publish");

  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  return (
    <Container>
      <img src="" />
      <div>
        <h2>What are you going to share today?</h2>
        <form
          onSubmit={(event) => handleSubmit(event, setButtonCtt, setDisable)}
        >
          <input
            type="text"
            placeholder="http://..."
            required
            disabled={disable}
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <textarea
            placeholder="Awesome article about #javascript"
            disabled={disable}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" disabled={disable}>
            {buttonCtt}
          </button>
        </form>
      </div>
    </Container>
  );
}

function handleSubmit(event, setButtonCtt, setDisable) {
  event.preventDefault();
  setDisable(true);
  setButtonCtt("Publishing...");

  //   let body =
}
const Container = styled.div`
  *:focus {
    outline: none;
  }
  width: 611px;
  height: 209px;
  background-color: #ffffff;
  color: #707070;
  display: flex;
  border-radius: 16px;
  font-family: "Lato", sans-serif;
  img {
    border-radius: 50%;
    width: 50px;
    margin: 16px 18px 0;
  }
  div {
    width: 100%;

    h2 {
      text-align: start;
      font-size: 20px;
      font-weight: 300;
      margin-bottom: 18px;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 150px;
      justify-content: space-between;
      align-items: flex-end;
      padding-right: 22px;
      button {
        width: 112px;
        background-color: #1877f2;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        height: 31px;

        &:disabled{
            background-color: #8caeda;
        }
      }
      input,
      textarea {
        width: 100%;
        border-radius: 5px;
        border: none;
        background-color: #efefef;

        &::placeholder {
          color: #949494;
          font-family: "Lato", sans-serif;
        }
        &:disabled{
            background-color: #dbdada;
        }
      }
      textarea {
        height: 66px;
        resize: none;
      }
      input {
        height: 30px;
      }
    }
  }
`;
