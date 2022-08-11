import { BottomBox, MainBox, MenuBox, ProfileMenu, PopUpMenu } from "./style";
import { FaChevronDown } from "react-icons/fa";

export default function Menu() {

    return (

        <MainBox>
            <MenuBox>
                <span>linkr</span>
                <ProfileMenu>
                    <div className="icon">
                        <FaChevronDown></FaChevronDown>
                    </div>
                    <img src="" alt="perfil" />
                </ProfileMenu>
                <PopUpMenu>
                    <span>Logout</span>
                </PopUpMenu>
            </MenuBox>
            <BottomBox></BottomBox>
        </MainBox>
    );
} 
