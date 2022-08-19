import { useState, useContext } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../contexts/UserContext.js";
import { useNavigate } from "react-router-dom";

import { Background, Box, Text, Buttons } from "./RepostModalStyle.js";

export default function RepostModal({ postId, userId, modalRepostOnOff }) {
  const [loading, setLoading] = useState(false);
  const { token } = useContext(UserContext);
  const defaultToken = token ? token : localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${defaultToken}`,
    },
  };
  const navigate = useNavigate();

  async function makeRepost() {
    setLoading(true);
    const body = {
      postId: Number(postId),
      userId: Number(userId),
    };
    try {
      await axios.post("http://localhost:4000/repost", body, config);
      setLoading(false);
      modalRepostOnOff(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Não foi possível compartilhar essa publicação");
      setLoading(false);
    }
  }

  return (
    <>
      <Background>
        <Box>
          <Text>
            <h1>
              Do you want to re-post
              <br />
              this link?
            </h1>
          </Text>
          <Buttons>
            <button className="noButton" onClick={() => modalRepostOnOff(true)}>
              No, cancel
            </button>
            <button className="yesButton" onClick={() => makeRepost()}>
              {loading ? (
                <ThreeDots color="#FFFFFF" height={13} align="center" />
              ) : (
                "Yes, share!"
              )}
            </button>
          </Buttons>
        </Box>
      </Background>
    </>
  );
}
