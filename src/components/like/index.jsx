import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Like() {

    const [clickedLike, setClickedLike] = useState(false);

    const COLOR_LIKE = "red";
    const COLOR_NOLIKE = "white";

    function makeLike() {
        return (
            clickedLike ?
                <AiFillHeart fill={COLOR_LIKE} onClick={() => setClickedLike(!clickedLike)} /> :
                <AiOutlineHeart fill={COLOR_NOLIKE} onClick={() => setClickedLike(!clickedLike)} />
        )
    }

    return makeLike();

} 
