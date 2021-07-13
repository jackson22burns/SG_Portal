import React, {Component} from "react"
import NavBar from "./NavBar";
import Stages from "./Stages";

const Documents = ({ setAuth }) => {
    return(
        <div>
            <NavBar setAuth={setAuth}/>
            <Stages/>
            <h1>Documents</h1>
        </div>
    )
}

export default Documents;