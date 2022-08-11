import { BottomBox, MainBox, MenuBox, ProfileMenu } from "./style";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { PopUpMenu } from "./popupmenu";
import { useState } from "react";

export default function Menu() {

    const [clicked, setClicked] = useState(false)

    function makeIcon() {

        return (
            clicked ?
                <FaChevronUp onClick={() => { setClicked(false) }} /> :
                <FaChevronDown onClick={() => { setClicked(true) }} />
        )
    }

    return (

        <MainBox>
            <MenuBox>
                <span>linkr</span>
                <ProfileMenu>
                    <div className="icon">
                        {makeIcon()}
                    </div>
                    <img src="" alt="perfil" onClick={() => { setClicked(!clicked) }} />
                </ProfileMenu>
                <PopUpMenu clicked={clicked} />
            </MenuBox>
            <BottomBox onClick={() => { setClicked(false) }}></BottomBox>
        </MainBox>
    );
} 
