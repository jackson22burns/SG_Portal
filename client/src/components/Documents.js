import React, {Component} from "react"
import NavBar from "./NavBar";
import Stages from "./Stages";
import HelpIcon from "./HelpIcon";

const Documents = ({ setAuth }) => {
    return(
        <div>
            <NavBar setAuth={setAuth}/>
            <Stages/>
            <div class="welcomeDoc">
                <h2>Steps to Complete</h2>
                <hr size="4" width="30%" color="black"/>
            </div>
            <HelpIcon/>
        </div>
    )
}

export default Documents;