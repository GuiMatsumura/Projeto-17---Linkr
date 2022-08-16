import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { Link } from "react-router-dom";
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
      <div>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          type="text"
          placeholder="Search for people"
          onChange={(e) => setSearchField(e.target.value)}
        />
        <FaSearch />
      </div>
      <SearchList filteredPersons={filteredPersons} searchField={searchField} />
    </Container>
  );
}

async function getUsers() {
  try {
    const response = await axios.get("https://back-linkr-10.herokuapp.com/users");
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Não foi possivel encontrar os usuários");
  }
}

function SearchList({ filteredPersons, searchField }) {
  const filtered = filteredPersons.map((person) => {
    return <List key={person.userId} person={person} />;
  });
  return searchField ? <StyledList>{filtered}</StyledList> : null;
}

function List({ person, key }) {
  return (
    <Link to={`/profile/${key}`}>
    <li>
      <img src={person.photo} />
      <h2>{person.username}</h2>
    </li>
    </Link>
  );
}


const Container = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 45px;
  background-color: #ffffff;
  border-radius: 8px;
  color: #c6c6c6;
  box-sizing: border-box;
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

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 0 15px;
  }
`;

const StyledList = styled.ul`
  font-family: "Lato";
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: #e7e7e7;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  border-radius: 0 0 8px 8px;
  img {
    display: inline-block;
    height: 39px;
    width: 39px;
    border-radius: 50%;
    margin: 14px 12px 14px 0;
  }
  li {
    display: flex;
    align-items: center;
    color: #515151;
  }
`;
