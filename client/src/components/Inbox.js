import React from "react";
import NavBar from "./NavBar";
import Stages from "./Stages";
import HelpIcon from "./HelpIcon";


const Inbox = ({ setAuth }) => {
    return(
        <div>
            <NavBar setAuth={setAuth}/>
            <Stages/>
            <h1>Inbox</h1>

            <HelpIcon/>
        </div>
    )
}

export default Inbox;