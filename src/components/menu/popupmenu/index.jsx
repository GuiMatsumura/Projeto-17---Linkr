import { useState } from "react"
import { PopUpMenuBox } from "./style"

export function PopUpMenu({ clicked }) {

    function makePopUp() {

        return (clicked ? <PopUpMenuBox><span>Logout</span></PopUpMenuBox> : "")

    }

    return makePopUp()
}
