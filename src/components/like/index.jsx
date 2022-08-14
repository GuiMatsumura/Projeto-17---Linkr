import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Like() {

    const [clickedLike, setClickedLike] = useState(false);

    const { token } = useContext(UserContext);
    const defaultToken = token ? token : localStorage.getItem("token");

    const COLOR_LIKE = "red";
    const COLOR_NOLIKE = "white";

    function makeLike() {
        return (
            clickedLike ?
                <AiFillHeart fill={COLOR_LIKE} onClick={() => submitLike()} /> :
                <AiOutlineHeart fill={COLOR_NOLIKE} onClick={() => submitLike()} />
        )
    }

    function submitLike() {

        const body = { like: clickedLike, postId: "1" }
        const URL = "http://localhost:4000/likes"
        const config = { headers: { Authorization: 'Bearer ' + defaultToken } }

        const request = axios.post(URL, body, config);

        request.then(() => { setClickedLike(!clickedLike) })

        request.catch(() => alert("Post Id inexistente!!!"))
    }

    return makeLike();

} 