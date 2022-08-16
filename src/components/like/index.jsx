import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useContext } from "react";
import ReactTooltip from 'react-tooltip';
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Like({ statusLike, postId }) {

    const [clickedLike, setClickedLike] = useState(statusLike);
    const [likesPost, setLikesPost] = useState([]);

    const { token } = useContext(UserContext);
    const defaultToken = token ? token : localStorage.getItem("token");

    const COLOR_LIKE = "red";
    const COLOR_NOLIKE = "white";

    function makeLike() {
        return (
            clickedLike ?
                <div data-tip data-for="like" >
                    <AiFillHeart
                        fill={COLOR_LIKE}
                        onClick={() => submitLike()}
                        onMouseOver={() => getLikes()} />
                    <ReactTooltip
                        id="like"
                        effect="solid"
                        place="bottom"
                        textColor="#505050"
                        backgroundColor="white">
                        {
                            likesPost.map((v, i) => {
                                if (i <= 1) {
                                    return `${i === 0 ? "Você, " : v.username}`;
                                }
                            })
                        }
                        {
                            likesPost.length > 2 ? 
                                " e outras " + `${likesPost.length - 2}` + " pessoas" : ""
                        }
                    </ReactTooltip>
                </div>
                :
                <div data-tip data-for="like">
                    <AiOutlineHeart
                        fill={COLOR_NOLIKE}
                        onClick={() => submitLike()}
                        onMouseOver={() => getLikes()} />
                    <ReactTooltip
                        id="like"
                        effect="solid"
                        place="bottom"
                        textColor="#505050"
                        backgroundColor="white">
                        {
                            likesPost.map((v, i) => {
                                if (i <= 1) {
                                    return v.username + `${i === 0 ? ", " : ""}`;
                                }
                            })
                        }
                        {
                            likesPost.length > 2 ? 
                                "e outras " + likesPost.length + " pessoas" : ""
                        }
                    </ReactTooltip>
                </div>
        )
    }

    function getLikes() {

        const body = { like: clickedLike, postId }
        const URL = "https://back-linkr-10.herokuapp.com/like-post"
        const config = { headers: { Authorization: 'Bearer ' + defaultToken } }

        const request = axios.post(URL, body, config);

        request.then((response) => { setLikesPost(response.data) })

        request.catch(() => alert("Post Id inexistente!!!"))

    }

    function submitLike() {

        const body = { like: clickedLike, postId }
        const URL = "https://back-linkr-10.herokuapp.com/likes"
        const config = { headers: { Authorization: 'Bearer ' + defaultToken } }

        const request = axios.post(URL, body, config);

        request.then(() => { setClickedLike(!clickedLike) })

        request.catch(() => alert("Post Id inexistente!!!"))
    }

    return makeLike();

} 