import React, {useState} from "react"
import NavBar from "./NavBar";
import Stages from "./Stages";
import HelpIcon from "./HelpIcon";

const Documents = ({ setAuth }) => {
    const [fileData, setFileData] = useState();

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0]);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // handle file data from the stat before sending
        // sets "data" to the same data type that multer uses
        const data = new FormData();
        data.append('upload', fileData) // fileData comes from stat which comes from submit handler

        fetch("http://localhost:5000/dashboard/documents", {
            method:"POST",
            body: data,
        })
        .then((result) => {
            console.log("File Sent Successful");
        })
        .catch((err) => {
            console.log(err.message);
        });
        setFileData(null);
    };

    return(
        <div>
            <NavBar setAuth={setAuth}/>
            <Stages/>
            <div class="welcomeDoc">
                <h2>Steps to Complete</h2>
                <hr size="4" width="30%" color="black"/>
            </div>
            <div class="welcomeDoc">
                <h2>Document Upload</h2>
                <hr size="4" width="30%" color="black"/>
            </div>
            <form class="input-group mb-3" onSubmit={onSubmitHandler}>
            <input 
                type="file" 
                class="form-control" 
                id="inputGroupFile01"  
                onChange={fileChangeHandler}
            />
            <button type="submit" className="subDocument">
                Upload File
            </button>
            </form>
            <HelpIcon/>
        </div>
    )
}

export default Documents;