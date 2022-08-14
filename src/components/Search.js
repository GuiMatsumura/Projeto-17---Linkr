import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Search({ display }) {
  const [searchField, setSearchField] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);
  async function getAllUsers() {
    const allUsers = await getUsers();
    console.log(searchField);
    setFilteredPersons(
      allUsers.filter((person) => {
        return (
          person.username.toLowerCase().includes(searchField.toLowerCase()) ||
          person.email.toLowerCase().includes(searchField.toLowerCase())
        );
      })
    );
  }

  useEffect(() => getAllUsers(), [searchField]);

  return (
    <Container display={display}>
      <input
        type="text"
        placeholder="Search for people"
        onChange={(e) => setSearchField(e.target.value)}
      />
      <FaSearch />
      {/* <SearchList filteredPersons={filteredPersons} /> */}
    </Container>
  );
}

async function getUsers() {
  try {
    const response = await axios.get("http://localhost:4000/users");
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Não foi possivel encontrar os usuários");
  }
}

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map((person) => {
    return <List key={person.userId} person={person} />;
  });
  console.log(filtered);
  // return filtered ? <StyledList>{filtered}</StyledList> : null;
  return <StyledList>{filtered}</StyledList>;
}

function List({ person }) {
  return (
    <li>
      <img src={person.photo} />
      <h2>{person.username}</h2>
    </li>
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

const StyledList = styled.ul`
  background-color: gray;
  color: red;
  img {
    height: 39px;
    width: 39px;
  }
`;
