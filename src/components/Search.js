import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export default function Search({ display }) {
  return (
    <Container display={display}>
      <input type="text" placeholder="Search for people" />
      <FaSearch />
    </Container>
  );
}

const Container = styled.div`
  display: ${(props) => props.display};
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 45px;
  background-color: #ffffff;
  border-radius: 8px;
  color: #c6c6c6;
  box-sizing: border-box;
  padding: 0 15px;
  input {
    font-family: "Lato";
    font-size: 19px;
    border: none;
    width: 100%;
    height: 43px;
    &::placeholder {
      color: #c6c6c6;
    }
  }
`;
