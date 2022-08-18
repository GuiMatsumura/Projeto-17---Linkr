import styled from "styled-components";
import { FiSend } from "react-icons/fi";

export const Container = styled.div`
  background-color: #1e1e1e;
  border-radius: 0 0 16px 16px;
  width: 611px;
  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 83px;
  }

  img {
    width: 39px;
    height: 39px;
    border-radius: 50%;
  }
`;

export const BoxComment = styled.div`
  height: 71px;
  width: 100%;
  h1 {
    color: #f3f3f3;
  }
  h2 {
    color: #acacac;
  }
  h3 {
    color: #565656;
  }
`;

export const InputBox = styled.div`
  width: 510px;
  height: 39px;
  position: relative;
  input {
    background-color: #252525;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    border: none;
    &::placeholder {
      color: #575757;
      font-family: "Lato";
      font-style: italic;
      font-size: 14px;
    }
  }
`;

export const StyledSend = styled(FiSend)`
  position: absolute;
  right: 10px;
  top: 30%;
  color: #ffffff;
`;
