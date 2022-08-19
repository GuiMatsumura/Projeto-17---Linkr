import styled from "styled-components";
import { BiRepost } from "react-icons/bi";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 611px;
  height: 33px;
  background-color: #1e1e1e;
  color: #ffffff;
  font-family: "Lato";
  font-size: 11px;
  margin-top: 40px;
  margin-bottom: -40px;
  border-radius: 16px 16px 0 0;
  h1 {
    font-weight: 700;
    margin-left: 5px;
  }
`;
export const StyledRepost = styled(BiRepost)`
  font-size: 20px;
  margin: 0 5px 0 15px;
`;
