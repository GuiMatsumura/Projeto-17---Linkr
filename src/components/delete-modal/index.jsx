import { useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

import { Background, Box, Text, Buttons } from "./style";

export default function DeleteModal({ setIsModalOpen, id }) {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  console.log(token)

  function deletePost(id) {
    const LINK_API = `https://back-linkr-10.herokuapp.com/delete/${id}`;
    const request = axios.delete(LINK_API, config);
    setLoading(true);

    request.then(response => {
      setLoading(false);
      setIsModalOpen(false);
      window.location.reload()
    });
    request.catch(err => {
      console.log(err.response);
      setLoading(false);
      alert("E-mail ja cadastrado. Tente novamente.");
    });
  }

  return (
    <>
      <Background>
        <Box>
          <Text>
            <h1>Are you sure you want<br></br>to delete this post?</h1>
          </Text>
          <Buttons>
            <button className="noButton">No, go back</button>
            <button className="yesButton" onClick={() => deletePost(id)}>
              {loading ? (
                <ThreeDots color="#FFFFFF" height={13} align='center' />
              ) : (
                'Yes, delete it'
              )}
            </button>
          </Buttons>
        </Box>
      </Background>
    </>
  );
}