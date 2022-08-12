import { useNavigate } from "react-router-dom";
import { PopUpMenuBox } from "./style";

export function PopUpMenu({ clicked }) {

    const navigate = useNavigate();

    function makePopUp() {

        return (clicked ?
            <PopUpMenuBox
                onClick={() => { localStorage.clear(); navigate("/") }}>
                <span>Logout</span>
            </PopUpMenuBox> : "")

    }

    return makePopUp()
}
