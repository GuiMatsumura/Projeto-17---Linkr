import styled from "styled-components";
import { FiSend } from "react-icons/fi";

export const Container = styled.div`
  background-color: #1e1e1e;
  border-radius: 0 0 16px 16px;
  width: 611px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .makeComment {
    width: 90%;
    display: flex;
    align-items: center;
    height: 83px;
  }

  img {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    margin-right: 14px;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const BoxComment = styled.div`
  height: 71px;
  width: 90%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #353535;
  font-family: "Lato";
  font-size: 14px;
  div div {
    display: flex;
  }
  h1 {
    color: #f3f3f3;
    font-weight: 700;
  }
  h2 {
    color: #acacac;
    margin-top: 7px;
  }
  h3 {
    color: #565656;
    margin-left: 4px;
  }
  img {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    margin-right: 18px;
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
    color: #ffffff;
    &::placeholder {
      color: #575757;
      font-family: "Lato";
      font-style: italic;
      font-size: 14px;
    }
    &:focus {
      outline: none;
    }
  }
  @media (max-width: 600px) {
    width: 83%;
  }
`;

export const StyledSend = styled(FiSend)`
  position: absolute;
  right: 10px;
  top: 30%;
  color: #ffffff;
`;
