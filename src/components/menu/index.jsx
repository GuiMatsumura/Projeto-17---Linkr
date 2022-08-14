import { MenuBox, ProfileMenu } from "./style";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { PopUpMenu } from "./popupmenu";
import { useContext, useState, useEffect } from "react";
import Search from "../Search.js"
import UserContext from "../../contexts/UserContext";

export default function Menu() {
  const [clicked, setClicked] = useState(false);
  const { image } = useContext(UserContext);
  const [display, setDisplay] = useState("flex");
  const defaultImage = image ? image : localStorage.getItem("image");
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  function getWindowWidth() {
    const { innerWidth: width } = window;
    return width;
  }
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    windowWidth < 600 ? setDisplay("none") : setDisplay("flex");
    window.addEventListener("resize", handleResize);
  }, [windowWidth]);

  function makeIcon() {
    return clicked ? (
      <FaChevronUp
        onClick={() => {
          setClicked(false);
        }}
      />
    ) : (
      <FaChevronDown
        onClick={() => {
          setClicked(true);
        }}
      />
    );
  }

  return (
    <MenuBox>
      <span>linkr</span>
      <Search display={display} />
      <ProfileMenu>
        <div className="icon">{makeIcon()}</div>
        <img
          src={defaultImage}
          alt="perfil"
          onClick={() => {
            setClicked(!clicked);
          }}
        />
      </ProfileMenu>
      <PopUpMenu clicked={clicked} />
    </MenuBox>
  );
}
