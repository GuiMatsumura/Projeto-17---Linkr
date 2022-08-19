import { useState, useContext } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import UserContext from "../../contexts/UserContext.js";

import { Background, Box, Text, Buttons } from "./style";

export default function DeleteModal({ modalOnOff, id }) {
  const [loading, setLoading] = useState(false);
  /* const token = localStorage.getItem("token"); */
  const { token } = useContext(UserContext);
  const defaultToken = token ? token : localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${defaultToken}`,
    },
  };

  /* console.log(id,defaultToken) */

  function deletePost(id) {
    const LINK_API = `https://back-linkr-10.herokuapp.com/delete/${id}`;
    const request = axios.delete(LINK_API, config);
    setLoading(true);

    request.then(response => {
      setLoading(false);
      modalOnOff(false);
      window.location.reload()
    });
    request.catch(err => {
      console.log(err.response);
      setLoading(false);
      modalOnOff(false);
      alert("Não foi possível apagar o post. Tente novamente.");
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
            <button className="noButton" onClick={() => modalOnOff(false)}>No, go back</button>
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