import React, {Component} from "react"
import NavBar from "./NavBar";
import Stages from "./Stages";

const Inbox = ({ setAuth }) => {
    return(
        <div>
            <NavBar setAuth={setAuth}/>
            <Stages/>
            <h1>Inbox</h1>
        </div>
    )
}

export default Inbox;