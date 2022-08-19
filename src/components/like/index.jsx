import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useContext } from "react";
import ReactTooltip from 'react-tooltip';
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import styled from "styled-components";

export default function Like({ postId }) {

    const [clickedLike, setClickedLike] = useState(false);
    const [usernameLikePost, setUsernameLikePost] = useState([]);

    const { userId, token, username } = useContext(UserContext);
    const defaultUserId = userId ? userId : localStorage.getItem("userId");
    const defaultToken = token ? token : localStorage.getItem("token");
    const defaultUsername = username ? username : localStorage.getItem("username");

    const COLOR_LIKE = "red";
    const COLOR_NOLIKE = "white";

    useEffect(() => {

        const URL = `http://localhost:4000/likes/${postId}`;
        const config = { headers: { Authorization: `Bearer ${defaultToken}` } };

        const request = axios.get(URL, config);

        request.then((response) => {
            getLikes();

            response.data.some((v) => defaultUserId == v.userId)
                ? setClickedLike(true) : setClickedLike(false);
        });

        request.catch(() => alert("Erro de autenticação!!!"));

    }, [])



    function makeLike() {

        return (
            <LikeBox>
                {clickedLike ?
                    <div>
                        <AiFillHeart
                            fill={COLOR_LIKE}
                            onClick={() => { submitLike() }}
                            onMouseOver={() => getLikes()}
                        />
                    </div>
                    :
                    <div>
                        <AiOutlineHeart
                            fill={COLOR_NOLIKE}
                            onClick={() => { submitLike() }}
                            onMouseOver={() => { getLikes() }}
                        />
                    </div>}
                <h3>{usernameLikePost.length} likes</h3>
            </LikeBox>
        )
    }

    function getLikes() {

        const URL = `http://localhost:4000/likes/many/${postId}`;
        const request = axios.get(URL);

        request.then((response) => {
            setUsernameLikePost(response.data);
        })
        
        request.catch(() => alert("Post Id não encontrado"));

    }

    function submitLike() {

        const body = { like: clickedLike, postId };
        const URL = "http://localhost:4000/likes";
        const config = { headers: { Authorization: 'Bearer ' + defaultToken } };

        const request = axios.post(URL, body, config);

        request.then(() => { setClickedLike(!clickedLike) });

        request.catch(() => alert("Post Id inexistente!!!"));
    }

    function showLiked() {


        if (!clickedLike) {
            if (usernameLikePost.length > 3) {
                return `${usernameLikePost[0].username}, ${usernameLikePost[1].username} e outras ${usernameLikePost.length - 2} pessoas`;
            } else if (usernameLikePost.length === 3) {
                return `${usernameLikePost[0].username}, ${usernameLikePost[1].username} e mais ${usernameLikePost.length - 2} pessoa`;
            } else if (usernameLikePost.length === 2) {
                return `${usernameLikePost[0].username} e ${usernameLikePost[1].username}`;
            } else {
                return `${usernameLikePost[0] ? usernameLikePost[0].username : "carregando"}`;
            }
        } else {
            if (usernameLikePost.length > 3) {
                return `Você, ${usernameLikePost[1].username} e outras ${usernameLikePost.length - 2} pessoas`;
            } else if (usernameLikePost.length === 3) {
                return `Você, ${usernameLikePost[1].username} e mais ${usernameLikePost.length - 2} pessoa`;
            } else if (usernameLikePost.length === 2) {
                return (`Você, ${usernameLikePost[0].username === defaultUsername ? usernameLikePost[1].username : usernameLikePost[0].username}`);
            } else {
                return `Você`;
            }
        }


    }

    const showWhoLiked = showLiked()

    return (
        <div data-tip={showWhoLiked} data-for="like">
            {makeLike()}

            <ReactTooltip
                id="like"
                effect="solid"
                place="bottom"
                textColor="#505050"
                backgroundColor="white"
            >
                { }
            </ReactTooltip>

        </div>
    );

}

const LikeBox = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    h3 {
      
      color: white;
      font-size: 12px;
      font-family: 'Lato';

    }
`;
